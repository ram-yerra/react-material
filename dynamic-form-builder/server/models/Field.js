const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = mongoose.ObjectId;
const Field = mongoose.model('Field', new Schema({
    // id: ObjectId,
    label: String,
    visible: Boolean,
    required: Boolean,
    order: Number,
    type: String
}));

module.exports = Field;