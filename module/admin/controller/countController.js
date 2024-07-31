const userModel = require('../../common/customer/model/userModel')
const supplierModel = require('../../common/supplier/model/supplierModel')
const customerModel = require('../../common/customercredit/model/transactionModel')
const supplierInvoicePayModel = require('../../common/supplierInvoicePay/models/supplierInvoicePayModel')

const getCount = async (req, res) => {
    try {
        const clientCount = await userModel.countDocuments()
        const supplierCount = await supplierModel.countDocuments()
        const result = await customerModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalDueAmount: { $sum: "$dueAmount" }
                }
            }
        ]);
        const TotalcashIn = await customerModel.aggregate([
            {
                $match: {
                    $or: [
                        { paymentType: true },
                        { dueAmount: { $ne: 0 } }
                    ]
                }
            },
            {
                $group: {
                    _id: null,
                    totalCashIn: {
                        $sum: {
                            $cond: {
                                if: { $ne: ["$dueAmount", 0] },
                                then: "$dueAmount",
                                else: "$Toatalmount"
                            }
                        }
                    }
                }
            }
        ]);

        const TotalcashOut = await supplierInvoicePayModel.aggregate([
            {
                $match: {
                    $or: [
                        { paymentType: true },
                        { dueAmount: { $ne: 0 } }
                    ]
                }
            },
            {
                $group: {
                    _id: null,
                    totalCashOut: {
                        $sum: {
                            $cond: {
                                if: { $eq: ["$dueAmount", 0] },
                                then: "$Toatalmount",
                                else: { $subtract: ["$Toatalmount", "$dueAmount"] }
                            }
                        }
                    }
                }
            }
        ]);


        // console.log({ TotalcashOut });
        const data = {
            clientCount: clientCount,
            supplierCount: supplierCount,
            totalCredit: result[0].totalDueAmount,
            TotalcashIn: TotalcashIn[0].totalCashIn,
            TotalcashOut: TotalcashOut[0].totalCashOut
        }
        res.status(201).json({
            message: 'Count Found',
            status: true,
            data: data
        })
    } catch (error) {
        console.log({ error });
        res.status(500).json({
            status: 500,
            error: error.message
        })
    }
}

const getCashInChart = async (req, res) => {
    try {
        const currentDate = new Date();
        const startOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const startOfSixMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 5, 1);

        const data = await customerModel.aggregate([
            {
                $match: {
                    $or: [
                        { paymentType: true },
                        { dueAmount: { $ne: 0 } }
                    ],
                    updatedAt: { $gte: startOfSixMonthsAgo }
                }
            },
            {
                $addFields: {
                    yearMonth: {
                        $dateToString: { format: "%Y-%m", date: "$updatedAt" }
                    }
                }
            },
            {
                $group: {
                    _id: "$yearMonth",
                    totalCashIn: {
                        $sum: {
                            $cond: {
                                if: { $ne: ["$dueAmount", 0] },
                                then: { $add: ["$Toatalmount", "$dueAmount"] },
                                else: "$Toatalmount"
                            }
                        }
                    }
                }
            },
            {
                $sort: {
                    _id: 1
                }
            }
        ]);

        const currentMonth = startOfCurrentMonth.toISOString().substring(0, 7);
        const previousMonths = [];
        for (let i = 0; i < 6; i++) {
            const month = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1).toISOString().substring(0, 7);
            previousMonths.push(month);
        }

        const result = {
            months: previousMonths.map(month => ({
                yearMonth: month,
                totalCashIn: 0
            }))
        };

        data.forEach(item => {
            const index = result.months.findIndex(month => month.yearMonth === item._id);
            if (index !== -1) {
                result.months[index].totalCashIn = item.totalCashIn;
            }
        });

        res.status(201).json({
            message: 'Total Cash In',
            status: true,
            data: result
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error.message
        });
    }
};

const getCashOutChart = async (req, res) => {
    try {
        const currentDate = new Date();
        const startOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const startOfSixMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 5, 1);
        const endOfCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        console.log('Current Date:', currentDate);
        console.log('Start of Current Month:', startOfCurrentMonth);
        console.log('Start of Six Months Ago:', startOfSixMonthsAgo);
        console.log('End of Current Month:', endOfCurrentMonth);

        const data = await supplierInvoicePayModel.aggregate([
            {
                $match: {
                    $or: [
                        { paymentType: true },
                        { dueAmount: { $ne: 0 } }
                    ],
                    updatedAt: { $gte: startOfSixMonthsAgo, $lte: endOfCurrentMonth }
                }
            },
            {
                $addFields: {
                    yearMonth: {
                        $dateToString: { format: "%Y-%m", date: "$updatedAt" }
                    }
                }
            },
            {
                $group: {
                    _id: "$yearMonth",
                    totalCashOut: {
                        $sum: {
                            $cond: {
                                if: { $eq: ["$dueAmount", 0] },
                                then: "$Toatalmount",
                                else: { $subtract: ["$Toatalmount", "$dueAmount"] }
                            }
                        }
                    }
                }
            },
            {
                $sort: {
                    _id: 1
                }
            }
        ]);

        console.log('Aggregated Data:', data);

        // Generate months array from 6 months ago to the current month
        const previousMonths = [];
        for (let i = 5; i >= 0; i--) {
            const month = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1).toISOString().substring(0, 7);
            previousMonths.push(month);
        }

        console.log('Expected Months:', previousMonths);

        // Initialize result with zero values
        const result = previousMonths.map(month => ({
            yearMonth: month,
            totalCashOut: 0
        }));

        // Update result with actual data
        data.forEach(item => {
            const index = result.findIndex(month => month.yearMonth === item._id);
            if (index !== -1) {
                result[index].totalCashOut = item.totalCashOut;
            }
        });

        console.log('Final Result:', result);

        res.status(201).json({
            message: 'Total Cash Out',
            status: true,
            data: result
        });
    } catch (error) {
        console.log({ error });
        res.status(500).json({
            status: 500,
            error: error.message
        });
    }
};

const getCashOutData = async (req, res) => {
    try {
        const data = await supplierInvoicePayModel.find(
            {
                
                    $or: [
                        { paymentType: true },
                        { dueAmount: { $gt: 0 } }
                    ],
                   
                
            }).populate('userId')
            res.status(201).json({
                message: 'Total Cash Out',
                status: true,
                data: data
            });
    } catch (error) {
        console.log({ error });
        res.status(500).json({
            status: 500,
            error: error.message
        })
    }
}











module.exports = { getCount, getCashInChart, getCashOutChart,getCashOutData }