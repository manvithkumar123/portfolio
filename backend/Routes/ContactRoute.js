const express = require('express');
const router = express.Router();
const Contactdata = require('../DBmodules/Contact');

// POST - User submits form
router.post('/contact', async (req, res) => {
  try {
    const { name, message, contact } = req.body;
    const newEntry = new Contactdata({ name, message, contact });
    await newEntry.save();
    res.status(201).send("Contact saved");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Admin dashboard fetches messages
router.get('/contact', async (req, res) => {
  try {
    const messages = await Contactdata.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});
router.post("/contact/delete", async (req, res) => {
  try {
    await Contactdata.findByIdAndDelete(req.body.id);
    res.redirect("/api/Dashboard");
  } catch (err) {
    res.status(500).send("Error deleting message");
  }
});
module.exports = router;