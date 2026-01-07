const express = require("express");
const { getStockPrices } = require("../controllers/stockController");

const router = express.Router();

router.post("/prices", getStockPrices);

module.exports = router;
