export const calculateTotals = (stocks) => {
  const totalInvestment = stocks.reduce(
    (sum, s) => sum + (Number.isFinite(s.investment) ? s.investment : 0),
    0
  );

  return stocks.map((s) => ({
    ...s,
    portfolioPercent: totalInvestment
      ? ((s.investment / totalInvestment) * 100).toFixed(2)
      : "0.00",
  }));
};
