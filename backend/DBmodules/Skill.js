require('dotenv').config(); // ← Add this line
const mongoose = require('mongoose');


const skillSchema = new mongoose.Schema({
    skillname: String,
    skillDescription: String,
    skilllogo: String,
});

module.exports = mongoose.model("Skill", skillSchema);