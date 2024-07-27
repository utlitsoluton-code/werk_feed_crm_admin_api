const userModel=require('../../common/customer/model/userModel')
const supplierModel=require('../../common/supplier/model/supplierModel')
const customerModel=require('../../common/customercredit/model/transactionModel')
const supplierInvoicePayModel=require('../../common/supplierInvoicePay/models/supplierInvoicePayModel')

const getCount=async (req,res)=>{
    try {
        const clientCount=await userModel.countDocuments()
        const supplierCount=await supplierModel.countDocuments()
        const result = await customerModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalDueAmount: { $sum: "$dueAmount" }
                }
            }
        ]);
        const data={
            clientCount:clientCount,
            supplierCount:supplierCount,
            totalCredit:result[0].totalDueAmount
        }
        res.status(201).json({
            message:'Count Found',
            status:true,
            data:data
        })
    } catch (error) {
        console.log({error});
        res.status(500).json({
            status:500,
            error:error.message
        })
    }
}
module.exports={getCount}