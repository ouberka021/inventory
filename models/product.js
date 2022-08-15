const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    qty: {type: String, required: true},
    desc: {type: String, required: true},
    model: {type: String, required: true},
    status: {type: String, required: true},
    category: {type: String, required: true},
    hdd: {type: String, required: true},
    dimm: {type: String, required: true},
    system: {type: String, required: true},
    display: {type: String, required: true},
    img: {type: String, required: true}
})

const Product = mongoose.model('Product', prodSchema);

module.exports = Product;