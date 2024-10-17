const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const guestRouter = require("./routes/guestRouter");
const userRouter = require("./routes/userRouter");
const proRouter = require("./routes/proRouter");
const adminRouter = require("./routes/adminRouter");
const adminMiddleware = require("./middlewares/adminMiddleware");
const photosAccessMiddleware = require("./middlewares/photosAccessMiddleware");
// const proMiddleware = require("./middlewares/proMiddleware")

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use("/public", express.static(path.join(__dirname, "..", "public")));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser());

app.use("/api", guestRouter);
app.use("/api/account", userRouter);
app.use("/api/pro", proRouter);
app.use("/api/dashboard", adminMiddleware(), adminRouter);

app.use(
  "/api/uploads",
  photosAccessMiddleware(),
  express.static(path.join(__dirname, "../public/uploads"))
);

app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

module.exports = app;
