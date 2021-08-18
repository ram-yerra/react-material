const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
const Form = mongoose.model('Form', new Schema ({
    id: ObjectId,
    name: String,
    description: String,
    fields: [
        {
            type: Schema.Types.ObjectId,
            ref: "Field"
        }
    ]    
}));

module.exports = Form;