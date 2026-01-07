export const createStock = (stock) => {
  const purchasePrice = Number(stock.purchasePrice);
  const quantity = Number(stock.quantity);

  const investment = purchasePrice * quantity;

  return {
    ...stock,
    purchasePrice,
    quantity,
    investment,

    cmp: null,
    presentValue: null,
    gainLoss: null,
    portfolioPercent: 0,

    peRatio: null,
    latestEarnings: null,
  };
};
