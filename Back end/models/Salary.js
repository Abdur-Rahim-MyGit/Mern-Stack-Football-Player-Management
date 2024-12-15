const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let storySchema = new Schema({
    title:{
        type: String,
        required: true
    },
    shortStory:{
        type: String,
        required: true
    },
    publishedDate:{
        type: Date,
        required: true
    },
    storyLink:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Story', storySchema)