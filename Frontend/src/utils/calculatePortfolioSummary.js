export const calculatePortfolioSummary = (stocks) => {
  const totalInvestment = stocks.reduce(
    (sum, s) => sum + (s.investment || 0),
    0
  );

  const currentValue = stocks.reduce(
    (sum, s) => sum + (s.presentValue || 0),
    0
  );

  const totalGainLoss = currentValue - totalInvestment;

  const returnPercent =
    totalInvestment > 0
      ? ((totalGainLoss / totalInvestment) * 100).toFixed(2)
      : 0;

  return {
    totalInvestment,
    currentValue,
    totalGainLoss,
    returnPercent,
  };
};
