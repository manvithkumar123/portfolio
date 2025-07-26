const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/portfolio`)

const skillSchema = new mongoose.Schema({
    skillname: String,
    skillDescription: String,
    skilllogo:String,
});

module.exports = mongoose.model("Skill", skillSchema);