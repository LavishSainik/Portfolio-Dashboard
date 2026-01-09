import YahooFinance from "yahoo-finance2";

const yahoo = new YahooFinance();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { symbols } = req.body;

    const result = {};

    for (const symbol of symbols) {
      try {
        const quote = await yahoo.quote(symbol);
        result[symbol] = {
          cmp: quote.regularMarketPrice ?? null,
          peRatio: quote.trailingPE ?? null,
          latestEarnings: quote.earningsTimestamp ?? null,
        };
      } catch (err) {
        console.warn("Failed symbol:", symbol);
        result[symbol] = null;
      }
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock prices" });
  }
}
