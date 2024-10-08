const { responseMessage, randomFixedInteger } = require("../../../../helper/comFunction")
const { userType: typeOfUser } = require("../../../../helper/enums")
const userModel = require("../model/userModel")
const UserModel = require("../model/userModel")

const createUser = async (req, res) => {
    try {
        const { firstName, surname, phone, email, address, userType,client_code } = req.body

        const newClient = await UserModel.create({
            client_code:client_code,
            firstName,
            surname,
            phone,
            email,
            address,
            userType: userType?.toUpperCase() === 'RECEIVABLE' ? typeOfUser.RECEIVABLE : typeOfUser.SUPPLIER
        })

        if (!newClient) throw new Error('New client is not created.')

        res.status(201).json({
            meta: { message: 'New User is created successfully.', status: true },
            data: newClient
        })
    } catch (err) {
        responseMessage(res, 500, false, err.message)
    }
}

const getUsers = async (req, res) => {
    try {
        const { type, page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;

        let query = {};
        if (type) {
            if (type.toUpperCase() === typeOfUser.RECEIVABLE) {
                query.userType = typeOfUser.RECEIVABLE;
            } else if (type.toUpperCase() === typeOfUser.SUPPLIER) {
                query.userType = typeOfUser.SUPPLIER;
            }
        }

        const usersPromise = UserModel.find(query).skip(skip).limit(limit).sort({ updatedAt: -1 });
        const countPromise = UserModel.countDocuments(query);

        const [users, totalLength] = await Promise.all([usersPromise, countPromise]);

        if (!users) throw new Error('users are not fetched.');

        res.status(200).json({
            meta: { message: 'All users are fetched successfully.', status: true },
            page,
            totalLength,
            data: users,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

const getUserDetails = async (req, res) => {
    try {
        const { userId } = req.query;

        const user = await UserModel.findById(userId);
        if (!user) throw new Error('user data are not fetched.');

        res.status(200).json({
            meta: { message: 'User details are fetched successfully.', status: true },
            data: user,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

const updateUserDetails = async (req, res) => {
    try {
      
        const {userId, firstName, surname, phone, address } = req.body

        let user = await UserModel.findByIdAndUpdate(userId,{firstName, surname, phone, address},{new:true});
        if (!user) throw new Error('user data are not fetched.');


        res.status(200).json({
            meta: { message: 'User details are updated successfully.', status: true },
            data: user,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

const deleteUser = async (req, res) => {
    const { userId } = req.body;
    let message
    let status
    try {
        const data = await UserModel.findByIdAndDelete(userId)
        if (data) {
            message='User Deleted Successfully'
            status=true
        } else {
            message='User Id not found'
            status=false
        }
        res.status(201).json({
            message:message,
            status:status
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const generateClientId=async (req,res)=>{
    try {
        const client_code=`CS${await randomFixedInteger(8)}`
        res.status(201).json({
            message:'Client code generated',
            client_code:client_code
        }) 
    } catch (error) {
        res.status(201).json({
            error:error.message
        })
    }
}
const payAmount=async (req,res)=>{
    const {amount,userId}=req.body;
    try {
        const data=await userModel.findByIdAndUpdate(userId,
            { $inc: { paidAmount: amount } },
            {new:true}
        )
        if (!data) {
            return res.status(401).json({message:`User not found ${userId}`})
        }
        res.status(201).json({
            message:`Paid amount ${amount}`,
            data:data
        })
    } catch (error) {
        res.status(500).json({
            err:error.message
        })
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserDetails,
    updateUserDetails,
    deleteUser,
    generateClientId,
    payAmount
}