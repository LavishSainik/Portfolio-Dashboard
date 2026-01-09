
/**
 * Fetch live CMP (and other optional metrics) for given symbols
 *
 * @param {string[]} symbols
 * @returns {Promise<Object>}
 */
export const fetchCMP = async (symbols) => {
  const response = await fetch("/api/stocks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ symbols }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch live market data");
  }

  return response.json();
};


export const fetchStockData = fetchCMP;
