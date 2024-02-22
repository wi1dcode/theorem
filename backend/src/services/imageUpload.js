const multer = require("multer")
const { v4: uuidv4 } = require("uuid")
const path = require("path")
const fs = require("fs")
const Form = require("../models/formModel")
const authService = require("./authService")

const imageStorage = multer.diskStorage({
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

      const imagesFolderPath = path.join(
        __dirname,
        "../../public/uploads",
        form.profile?.email,
        "images"
      )

      if (!fs.existsSync(imagesFolderPath)) {
        fs.mkdirSync(imagesFolderPath, { recursive: true })
      }

      cb(null, imagesFolderPath)
    } catch (error) {
      console.log(error)
      cb(error, false)
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = uuidv4()
    const fileExtension = path.extname(file.originalname)
    cb(null, `${uniqueSuffix}${fileExtension}`)
  },
})

const imageFilter = function (req, file, cb) {

  const allowedTypes = /jpeg|jpg|png/
  const mimeType = allowedTypes.test(file.mimetype)
  const extName = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  )

  if (mimeType && extName) {
    return cb(null, true)
  } else {
    cb("Seuls les images de type JPEG, JPG, PNG autorisé!")
  }
}

const uploadImages = multer({
  storage: imageStorage,
  fileFilter: imageFilter,
  limits: { fileSize: 30 * 1024 * 1024 }, // 30MB
})

module.exports = { uploadImages }
