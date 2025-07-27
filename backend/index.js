require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));
const app= express();
const SkillRoute=require("./Routes/SkillRoute");
const CertificateRoute=require("./Routes/CertificateRoute")
const ProjectRoute=require("./Routes/ProjectRoute")
const contactroute=require("./Routes/ContactRoute")
app.set("view engine","ejs" )
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.use('/certificates', express.static(path.join(__dirname, 'public/Images/Certificates')));
app.use('/Images/Projects', express.static(path.join(__dirname, 'public', 'Images', 'Projects')));
app.use("/api", SkillRoute);
app.use("/api",CertificateRoute);
app.use("/api",ProjectRoute);
app.use("/api",contactroute);

app.get("/", (req, res) => {
  res.render("Dashboard")
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});