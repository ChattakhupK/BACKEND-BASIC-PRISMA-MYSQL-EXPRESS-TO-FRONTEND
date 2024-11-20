// setup server s1
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// import router (way3)
const { readdirSync } = require("fs");

// import router (way2)
// const product = require("./router/product");
// const auth = require("./router/auth");

// middleware s4
app.use(morgan("dev")); //ทุก Route ต้องผ่าน morgan('dev') ที่เอาไว้ดูสถานะ Route
app.use(bodyParser.json()); //สำหรับให้ server สามารถอ่านไฟล์รูปแบบ json ได้
app.use(cors()); //สำหรับเวลาทำงานหลาย domain แล้ว หลังบ้านไม่สามารถติดต่อกับหน้าบ้านได้

// Route without router (way1) s3
// app.get("/", (req, res) => {
//   res.send("hello //");
// });
// app.post("/api", (req, res) => {
//   const { name, price } = req.body;
//   console.log(price);
//   res.send(req.body);
// });

// Route with router (way2) s3
// app.use("/api", product);
// app.use("/api", auth);

// route with router+readdirSync (way3)
readdirSync("./router").map((item) =>
  app.use("/api", require("./router/" + item))
);

// start server s2
app.listen(5000, () => console.log("server is running on port 5000"));
