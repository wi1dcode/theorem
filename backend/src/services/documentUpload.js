const multer = require("multer")
const { v4: uuidv4 } = require("uuid")
const path = require("path")
const fs = require("fs")
const Form = require("../models/formModel")
const authService = require("./authService")

const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    try {
      const token = req.headers.authorization.split(" ")[1]
      const userData = authService.validateAccessToken(token)

      if (!userData) {
        return cb(
          new Error("Erreur lors de l'analyse de l'email de l'utilisateur"),
          false
        )
      }

      const form = await Form.findById(req.params.formId)
      if (
        !form ||
        (form.profile?.email !== userData.email &&
          !userData.roles.includes("ADMIN"))
      ) {
        return cb(new Error("Accès non autorisé"), false)
      }

      const userFolderPath = path.join(
        __dirname,
        "../../public/uploads",
        form.profile?.email
      )

      if (!fs.existsSync(userFolderPath)) {
        fs.mkdirSync(userFolderPath, { recursive: true })
      }

      cb(null, userFolderPath)
    } catch (error) {
      cb(error, false)
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuidv4()
    const fileExtension = path.extname(file.originalname)
    const originalNameWithoutExtension = file.originalname.replace(
      fileExtension,
      ""
    )
    cb(null, `${originalNameWithoutExtension}-${uniqueSuffix}${fileExtension}`)
  },
})

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const allowedMimeTypes = [
      "application/pdf", // PDF
      "application/msword", //  DOC
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX
      "application/vnd.ms-excel", // XLS
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // XLSX
      "application/vnd.ms-powerpoint", // PPT
      "application/vnd.openxmlformats-officedocument.presentationml.presentation", // PPTX
    ]

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(
        new Error(
          "Seuls les fichiers de type document (PDF, DOC, DOCX, XLS) sont autorisés !"
        ),
        false
      )
    }
  },
})

module.exports = upload
