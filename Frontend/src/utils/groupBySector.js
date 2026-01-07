export const groupBySector = (stocks) => {
  return stocks.reduce((acc, stock) => {
    const sector = stock.sector || "Others";

    if (!acc[sector]) {
      acc[sector] = {
        sector,
        stocks: [],
        totalInvestment: 0,
        totalPresentValue: 0,
        totalGainLoss: 0,
      };
    }

    acc[sector].stocks.push(stock);
    acc[sector].totalInvestment += stock.investment;

    if (stock.presentValue != null) {
      acc[sector].totalPresentValue += stock.presentValue;
      acc[sector].totalGainLoss += stock.gainLoss;
    }

    return acc;
  }, {});
};
