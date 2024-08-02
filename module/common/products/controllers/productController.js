const productModel = require('../models/productModel')
const productCategoryModel = require('../models/productCategoryModel')
const createProduct = async (req, res) => {
    const { product_Name, unit_cost_price, unit_selling_price, mark_up, barcode } = req.body
    const { _id } = req.decoded;

    try {
        const data = await productModel.create({ userId: _id, product_Name, unit_cost_price, unit_selling_price, mark_up, barcode })
        res.status(201).json({
            message: 'Product Created Successfully',
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const getAllProduct = async (req, res) => {
    const { page = 1, limit = 10, product } = req.query;
    try {
        const regexPattern = new RegExp(product, 'i');
        let query = {}
        const skip = (page - 1) * limit;
        if (!product) {
            query = {
                product_Name: regexPattern
            }
        }
        const data = await productModel.find(query).populate('category').skip(skip).limit(limit);
        const countPromise = productModel.countDocuments(query);
        const [trans, totalLength] = await Promise.all([data, countPromise]);

        res.status(201).json({
            message: "Product Found",
            status: true,
            page,
            totalLength,
            data: trans,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const getProductById = async (req, res) => {
    const productId = req.query;
    try {
        const data = await productModel.findById(productId)
        res.status(201).json({
            message: 'Product Found',
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const updateProduct = async (req, res) => {
    const { productId, product_Name, unit_cost_price, unit_selling_price, mark_up, barcode } = req.body;
    try {
        const data = await productModel.findByIdAndUpdate(productId, { product_Name, unit_cost_price, unit_selling_price, mark_up, barcode }, { new: true })
        res.status(201).json({
            message: 'Product Updated',
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}
const deleteProduct=async (req,res)=>{
    const {productId}=req.body;
    try {
        const data=await productModel.findByIdAndDelete(productId)
        res.status(201).json({
            message: 'Product Deleted',
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}
const createProductCategory = async (req, res) => {
    const { name } = req.body;
    const { _id } = req.decoded;

    try {
        const data = await productCategoryModel.create({ name, userId: _id })
        res.status(201).json({
            message: 'Product Updated',
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const getProductCategory = async (req, res) => {

    try {
        const data = await productCategoryModel.find()
        res.status(201).json({
            message: 'Product Updated',
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const updateProductCategory = async (req, res) => {
    const { name, cateId } = req.body;
    try {
        const data = await productCategoryModel.findByIdAndUpdate(cateId, { name }, { new: true })
        res.status(201).json({
            message: 'Product Updated',
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}
const deleteProductCategory = async (req, res) => {
    const {  cateId } = req.body;
    try {
        const data = await productCategoryModel.findByIdAndDelete(cateId)
        res.status(201).json({
            message: 'Product Updated',
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}
module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    createProductCategory,
    getProductCategory,
    updateProductCategory,
    deleteProductCategory
}