const mongoose=require("mongoose");
const ProjectSchema = new mongoose.Schema({
  projectname: String,
  projectimage: [
    {
      data: Buffer,
      contentType: String
    }
  ],
  projectsubtitle: String,
  toolsuse: String,
  gradientcolour: String,
  bordercolour: String,
  giturl: String
});

module.exports = mongoose.model('project',ProjectSchema)