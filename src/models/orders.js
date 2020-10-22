const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    product: {type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true},
    quantity : {
        type:Number,
        default:1
    }

},{timestamps:true})
module.exports = mongoose.model('Orders',orderSchema)
