const express = require("express")
const cors = require("cors")
const path = require("path")

const guestRouter = require("./routes/guestRouter")
const userRouter = require("./routes/userRouter")
const adminRouter = require("./routes/adminRouter")
const adminMiddleware = require("./middlewares/adminMiddleware")
// const proMiddleware = require("./middlewares/proMiddleware")

const app = express()

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
)

app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")))
app.use("/", guestRouter)
app.use("/account", userRouter)
app.use("/dashboard", adminRouter)
// app.use("/pro")

// Serve the public folder for public resources
// app.use(express.static(path.join(__dirname, "../public")))

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")))

module.exports = app
