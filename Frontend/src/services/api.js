import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

// 🔹 Use this ONLY when backend returns CMP only
export const fetchCMP = async (symbols) => {
  const res = await api.post("/api/stocks/prices", { symbols });
  return res.data;
};

// 🔹 Use this AFTER Phase 7 (CMP + PE + Earnings)
export const fetchStockData = async (symbols) => {
  const res = await api.post("/api/stocks/prices", { symbols });
  return res.data;
};
