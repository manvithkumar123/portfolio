const express = require('express');
const router = express.Router();
const skillmodel = require("../DBmodules/Skill");

function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

// POST route
router.post("/Dashboard/skill", isAuthenticated, async (req, res) => {
    const { skillname, skillDescription ,skilllogo} = req.body;
    console.log("Received form data:", req.body); // ✅ show in terminal

    try {
        const newSkill = new skillmodel({ skillname, skillDescription,skilllogo });
        await newSkill.save();
        res.send("Skill saved successfully!");
        console.log(newSkill); 
    } catch (err) {
        res.status(500).send("Error saving skill");

        console.error("Error saving skill:", err.message); // 🔍 Shows exact issue

    }
});
router.post("/Dashboard/skill/delete", isAuthenticated, async (req, res) => {
    const { skillid } = req.body;
    try {
        await skillmodel.findByIdAndDelete(skillid);
        res.redirect("/api/Dashboard");
    } catch (err) {
        console.error("Error deleting skill:", err.message);
        res.status(500).send("Error deleting skill");
    }
});

router.post("/Dashboard/skill/edit", isAuthenticated, async (req, res) => {
    const { skillid, skillname, skillDescription } = req.body;

    try {
        const updateFields = {};
        if (skillname) updateFields.skillname = skillname;
        if (skillDescription) updateFields.skillDescription = skillDescription;

        await skillmodel.findByIdAndUpdate(skillid, updateFields);
        res.redirect("/api/Dashboard");
    } catch (err) {
        console.error("Error updating skill:", err.message);
        res.status(500).send("Error updating skill");
    }
});

router.get("/skills", async (req, res) => {
    try {
        const skills = await skillmodel.find();
        res.send(skills)
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch skills" });
    }
});

module.exports = router;