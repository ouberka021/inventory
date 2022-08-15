const mongoose = require('mongoose');

const categSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, required: true}
})

const Category = mongoose.model('Category', categSchema);

module.exports = Category;