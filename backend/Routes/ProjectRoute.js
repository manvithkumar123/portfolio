const express= require("express")
const router=express.Router();
const projectmodel=require("../DBmodules/Project")

const fs = require("fs");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/Images/Projects");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post("/Dashboard/project", upload.array("projectimage", 10), async (req, res) => {
    const {
        projectname,
        projectsubtitle,
        toolsuse,
        giturl,
        bordercolour,
        gradientcolour
    } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).send("No images uploaded. Make sure the field name is 'projectimage'.");
    }

    const images = req.files.map(file => file.filename);

    // Ensure only filenames are stored for projectimage
    let newproject = new projectmodel({
        projectname,
        projectsubtitle,
        toolsuse,
        giturl,
        bordercolour,
        gradientcolour,
        projectimage: images // filenames only
    });

    await newproject.save();
    res.send("Project Saved");
});
router.get("/project",async (req,res)=>{
    let projects = await projectmodel.find();
    res.send(projects);
})
router.post("/Dashboard/project/edit",async (req,res)=>{
    let {projectid,projectname,projectimage,projectsubtitle,toolsuse,giturl} = req.body
    try{
        const  updatefield={};
        if(projectname) updatefield.projectname=projectname;
        if(projectimage) updatefield.projectimage=projectimage;
        if(projectsubtitle) updatefield.projectsubtitle=projectsubtitle;
        if(toolsuse) updatefield.toolsuse=toolsuse;
        if(giturl) updatefield.giturl=giturl;
        await projectmodel.findByIdAndUpdate(projectid , updatefield)
        res.send("updated")
    }catch(err){
        res.status(404).send("cannot edit: " + err.message);
    }
})
router.post('/Dashboard/project/delete',async (req,res)=>{
    let {projectid} =req.body;
    try{
        await projectmodel.findByIdAndDelete(projectid)
        res.send("deleted")
    }catch(err){
        res.status(404).send(err,"cannot delete")
    }

})
router.post("/Dashboard/project/delete/all",async (req,res)=>{
    try{
        await projectmodel.deleteMany({});
        res.send("deleted")
    }catch(err){
        res.status(404).send(err,"cannot delete")
    }
})
module.exports = router;