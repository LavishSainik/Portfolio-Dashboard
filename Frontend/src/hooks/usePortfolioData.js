import { useEffect, useState, useCallback } from "react";
import { createStock } from "../utils/portfolioSchema";
import { calculateTotals } from "../utils/calculations";
import { fetchStockData } from "../services/api";
import { rawPortfolio } from "../data/portfolio";

export const usePortfolioData = () => {
  const [rawData, setRawData] = useState(rawPortfolio);
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);

  // 🔹 Normalize raw data → stocks
  useEffect(() => {
    const normalized = rawData
      .filter(
        (s) =>
          s &&
          Number.isFinite(Number(s.purchasePrice)) &&
          Number.isFinite(Number(s.quantity))
      )
      .map(createStock);

    setStocks(calculateTotals(normalized));
  }, [rawData]);

  const refreshLiveData = useCallback(async () => {
    try {
      setError(null);

      const symbols = stocks.map((s) => s.symbol).filter(Boolean);
      if (!symbols.length) return;

      const liveData = await fetchStockData(symbols);

      setStocks((prev) =>
        calculateTotals(
          prev.map((s) => {
            const live = liveData[s.symbol];
            if (!live || live.cmp == null) return s;

            const presentValue = live.cmp * s.quantity;

            return {
              ...s,
              cmp: live.cmp,
              peRatio: live.peRatio,
              latestEarnings: live.latestEarnings,
              presentValue,
              gainLoss: presentValue - s.investment,
            };
          })
        )
      );
    } catch (err) {
      console.error(err);
      setError("Some stocks could not fetch live prices.");

    }
  }, [stocks]);

  useEffect(() => {
    refreshLiveData();
    const id = setInterval(refreshLiveData, 15000);
    return () => clearInterval(id);
  }, [refreshLiveData]);

  return {
    stocks,
    error,
    setRawData,
  };
};
