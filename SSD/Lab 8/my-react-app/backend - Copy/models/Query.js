const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuerySchema = new Schema({
    ta_roll :{
        type: String,
        required: true
    },
    std_roll:{
        type: String,
        required: true
    },
    exam_name:{
        type: String,
        required: true,
    },
    course_name:{
        type: String,
        required: true,
    },
    question_num:{
        type: Number,
        required: true,
    },
    ta_comment:{
        type: String,
        required: false,
    },
    std_comment:{
        type: String,
        required: true,
    },
    Is_Active:{
        type: Boolean,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
});

const Query = mongoose.model('Query', QuerySchema);
module.exports = Query;