// setup router
const express = require("express");
const router = express.Router();
const {
  create,
  list,
  read,
  update,
  remove,
} = require("../controllers/product");

// route
router.get("/product", list);
router.post("/product", create);
router.get("/product/:productId", read);
router.put("/product/:productId", update);
router.delete("/product/:productId", remove);

// output router
module.exports = router;
