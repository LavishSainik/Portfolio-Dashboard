const YahooFinance = require("yahoo-finance2").default;
const { getCache, setCache } = require("./cacheService");

// 🔴 THIS IS MANDATORY IN v2+
const yahoo = new YahooFinance();

/**
 * Fetch CMP safely for multiple symbols
 * - Per-symbol error isolation
 * - Cache enabled
 * - Compatible with yahoo-finance2 v2+
 */
const fetchCMP = async (symbols) => {
  const result = {};

  for (const symbol of symbols) {
    try {
      // Cache check
      const cached = getCache(symbol);
      if (cached !== undefined) {
        result[symbol] = cached;
        continue;
      }

      const quote = await yahoo.quote(symbol);
      const price = quote?.regularMarketPrice ?? null;

      setCache(symbol, price);
      result[symbol] = price;
    } catch (err) {
      console.warn("Yahoo Finance failed for:", symbol);
      result[symbol] = null;
    }
  }

  return result;
};

module.exports = { fetchCMP };
