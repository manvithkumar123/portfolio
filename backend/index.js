const express = require("express");
const cors = require("cors");
const path = require("path");
const app= express();

const session = require("express-session");

app.use(session({
  secret: "MANI", // use a strong secret in production
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // set secure: true only if using HTTPS
}));
const SkillRoute=require("./Routes/SkillRoute");
const CertificateRoute=require("./Routes/CertificateRoute")
const ProjectRoute=require("./Routes/ProjectRoute")
const contactroute=require("./Routes/ContactRoute")
app.set("view engine","ejs" )
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/Images/Certificates', express.static(path.join(__dirname, 'public/Images/Certificates')));
app.use('/Images/Projects', express.static(path.join(__dirname, 'public', 'Images', 'Projects')));
app.use("/api", SkillRoute);
app.use("/api",CertificateRoute);
app.use("/api",ProjectRoute);
app.use("/api",contactroute);


const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});