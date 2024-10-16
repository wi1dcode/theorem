const multer = require("multer");
const path = require("path");
const fs = require("fs");

const sanitizeFileName = (fileName) => {
  return fileName.replace(/[^a-z0-9.]/gi, "_").toLowerCase();
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const userFolderPath = path.join(__dirname, "../../public");

    if (!fs.existsSync(userFolderPath)) {
      fs.mkdirSync(userFolderPath, { recursive: true });
    }

    cb(null, userFolderPath);
  },
  filename: function (req, file, cb) {
    const originalName = path.parse(file.originalname).name;
    const fileExtension = path.extname(file.originalname);

    const sanitizedFileName = sanitizeFileName(originalName);

    cb(null, `${sanitizedFileName}${fileExtension}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"), false);
    }
  },
  limits: {
    fileSize: 20 * 1024 * 1024, // 20 MB
  },
});

module.exports = upload;
