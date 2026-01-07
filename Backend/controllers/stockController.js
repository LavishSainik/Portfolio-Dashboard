const { fetchCMP } = require("../services/yahooService");
const { fetchGoogleFinanceData } = require("../services/googleFinanceService");

const getStockPrices = async (req, res) => {
  try {
    const { symbols } = req.body;

    if (!Array.isArray(symbols) || !symbols.length) {
      return res.json({});
    }

    const cmpData = await fetchCMP(symbols);
    const response = {};

    for (const symbol of symbols) {
      const exchange = symbol.endsWith(".NS") ? "NSE" : "BSE";
      const googleData = await fetchGoogleFinanceData(symbol, exchange);

      response[symbol] = {
        cmp: cmpData[symbol],
        peRatio: googleData.peRatio,
        latestEarnings: googleData.latestEarnings,
      };
    }

    res.json(response);
  } catch (err) {
    console.error("Backend fatal error:", err);
    res.status(500).json({ error: "Backend failure" });
  }
};

module.exports = { getStockPrices };
