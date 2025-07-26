const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)

const skillSchema = new mongoose.Schema({
    skillname: String,
    skillDescription: String,
    skilllogo:String,
});

module.exports = mongoose.model("Skill", skillSchema);