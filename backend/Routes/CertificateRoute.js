const express = require('express')
const router=express.Router();
const certificatemodel = require("../DBmodules/Certificates")
const multer = require('multer');
const upload = require('../utils/multer');
const { route } = require('./ProjectRoute');
router.post("/Dashboard/certificate", upload.array("imageurl", 5), async (req, res) => {
  let { captiontext, hovertext } = req.body;
  const imageFilenames = req.files.map(file => file.filename);
  const hoverTextArray = Array.isArray(hovertext) ? hovertext : [hovertext];

  let newcertificate = new certificatemodel({
    imageurl: imageFilenames,
    captiontext,
    hovertext: hoverTextArray
  });

  await newcertificate.save();
  res.send("Certificate saved successfully!");
});

router.get("/certificates", async (req, res) => {
  try {
    const certificates = await certificatemodel.find();
    res.send(certificates);
  } catch (err) {
    console.error("Error fetching certificates:", err.message);
    res.status(500).send("Internal Server Error");
  }
});
router.post("/Dashboard/certificate/delete", async (req,  res) => {
  const { certificateid } = req.body;

  if (!certificateid || certificateid.trim() === "") {
    return res.status(400).json({ success: false, message: "Certificate ID is required" });
  }

  try {
    const deleteCertificate = await certificatemodel.findByIdAndDelete(certificateid);
    if (deleteCertificate) {
      res.status(200).json({ success: true, message: "Certificate deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Certificate not found" });
    }
  } catch (error) {
    console.error("Delete error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
router.post("/Dashboard/certificate/edit", upload.array("imageurl", 5), async (req, res) => {
  const { certificateid, captiontext, hovertext } = req.body;
  const updateFields = {};
  if (captiontext) updateFields.captiontext = captiontext;
  if (req.files && req.files.length > 0) {
    updateFields.imageurl = req.files.map(file => file.filename);
  }
  if (hovertext) {
    updateFields.hovertext = Array.isArray(hovertext) ? hovertext : [hovertext];
  }

  try {
    await certificatemodel.findByIdAndUpdate(certificateid, updateFields);
    res.status(200).json({ success: true, message: "Certificate updated successfully" });
  } catch (err) {
    console.error("Error updating certificate:", err.message);
    res.status(500).send("Error updating certificate");
  }
});

router.post("/Dashboard/certificate/delete/all",async(req,res)=>{
        try{
            await certificatemodel.deleteMany({});
            res.send("deleted")
        }catch(err){
            res.status(404).send(err,"cannot delete")
        }

})
module.exports = router;