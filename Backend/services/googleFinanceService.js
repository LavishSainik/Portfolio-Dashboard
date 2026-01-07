const axios = require("axios");
const cheerio = require("cheerio");
const { getCache, setCache } = require("./cacheService");

const fetchGoogleFinanceData = async (symbol, exchange) => {
  const cacheKey = `GF_${symbol}`;

  const cached = getCache(cacheKey);
  if (cached) return cached;

  const googleSymbol = `${symbol.split(".")[0]}:${exchange}`;
  const url = `https://www.google.com/finance/quote/${googleSymbol}`;

  const { data } = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  const $ = cheerio.load(data);

  let peRatio = null;
  let latestEarnings = null;

  $("div").each((_, el) => {
    const text = $(el).text();

    if (text.includes("P/E ratio")) {
      peRatio = $(el).next().text();
    }

    if (text.includes("Earnings")) {
      latestEarnings = $(el).next().text();
    }
  });

  const result = { peRatio, latestEarnings };

  setCache(cacheKey, result);
  return result;
};

module.exports = { fetchGoogleFinanceData };
