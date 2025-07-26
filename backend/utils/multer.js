const multer = require("multer");
const path = require("path")
const crypto = require("crypto")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', 'public', 'Images', 'Certificates'))
    },
    filename: function (req, file, cb) {
      crypto.randomBytes(12, (err, name) => {
        if (err) {
          console.error("Error generating filename:", err);
          return cb(err);
        }
        const fn = name.toString("hex") + path.extname(file.originalname);
        cb(null, fn);
      });
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;