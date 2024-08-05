const notificationModel =require('../model/notificationModel')

const createNotification=async (req,res)=>{
    const {title,des,notificationType,userId}=req.body;
    try {
        const data=await notificationModel.create({title,des,notificationType,userId})
        res.status(201).json({
            message:'Notification Created',
            data:data
        })
    } catch (error) {
        res.status(500).json({
            error:error.message,
            status:500
        })
    }
}

module.exports={createNotification}