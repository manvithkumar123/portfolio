const mongoose = require("mongoose")

const CertificateSchema = new mongoose.Schema({
    imageurl:[String],
    captiontext:String,
    hovertext:[String],

})

module.exports = mongoose.model("certificate", CertificateSchema);