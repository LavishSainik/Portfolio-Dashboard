export const formatCurrency = (value) => {
  if (value === null || value === undefined) return "--";
  return `₹${value.toLocaleString("en-IN")}`;
};

export const formatPercent = (value) => {
  if (value === null || value === undefined) return "--";
  return `${Number(value).toFixed(2)}%`;
};
