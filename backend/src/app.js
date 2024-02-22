const express = require("express")
const cors = require("cors")
const path = require("path")
const cookieParser = require("cookie-parser")

const guestRouter = require("./routes/guestRouter")
const userRouter = require("./routes/userRouter")
const adminRouter = require("./routes/adminRouter")
const adminMiddleware = require("./middlewares/adminMiddleware")
const photosAccessMiddleware = require("./middlewares/photosAccessMiddleware")
// const proMiddleware = require("./middlewares/proMiddleware")

const app = express()

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
)

app.use(express.json())
app.use(cookieParser())
// app.use(
//   "/api/uploads",
//   express.static(path.join(__dirname, "../public/uploads"))
// )
app.use("/api", guestRouter)
app.use("/api/account", userRouter)
app.use("/api/dashboard", adminMiddleware(), adminRouter)
// app.use("/pro")

// Serve the public folder for public resources
// app.use(express.static(path.join(__dirname, "../public/uploads")))
app.use(
  "/api/uploads",
  photosAccessMiddleware(),
  express.static(path.join(__dirname, "../public/uploads"))
)

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")))

module.exports = app
