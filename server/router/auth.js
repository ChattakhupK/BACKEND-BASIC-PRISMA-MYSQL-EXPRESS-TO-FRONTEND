
// setup router
const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Hello Login");
});

module.exports = router;
