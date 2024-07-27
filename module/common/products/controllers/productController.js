const productModel = require('../models/productModel')

const createProduct = async (req,res) => {
    const {Stock,price,name}=req.body
    try {
      const data=await productModel.create({Stock,price,name})
      res.status(201).json({
        message:'Product Created Successfully',
        status:true,
        data:data
      })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const getAllProduct=async (req,res)=>{
    try {
        const data=await productModel.find()
        res.status(201).json({
            message:"Product Found",
            status:true,
            data:data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

module.exports={createProduct,getAllProduct}