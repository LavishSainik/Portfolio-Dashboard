import * as XLSX from "xlsx";

/**
 * Maps company names (from Excel) → Yahoo Finance symbols
 * This is REQUIRED because the Excel does not contain symbols
 */
const SYMBOL_MAP = {
  "HDFC Bank": "HDFCBANK.NS",
  "Bajaj Finance": "BAJFINANCE.NS",
  "ICICI Bank": "ICICIBANK.NS",
  "Bajaj Housing": "BAJAJHFL.NS",
  "Savani Financials": "SAVANIFIN.NS",
  "Affle India": "AFFLE.NS",
  "LTI Mindtree": "LTIM.NS",
  "KPIT Tech": "KPITTECH.NS",
  "Tata Tech": "TATATECH.NS",
  "BLS E-Services": "BLSE.NS",
  "Tanla": "TANLA.NS",
  "Dmart": "DMART.NS",
  "Tata Consumer": "TATACONSUM.NS",
  "Pidilite": "PIDILITIND.NS",
  "Tata Power": "TATAPOWER.NS",
  "KPI Green": "KPIGREEN.NS",
  "Suzlon": "SUZLON.NS",
  "Gensol": "GENSOL.NS",
  "Hariom Pipes": "HARIOMPIPE.NS",
  "Astral": "ASTRAL.NS",
  "Polycab": "POLYCAB.NS",
  "Clean Science": "CLEAN.NS",
  "Deepak Nitrite": "DEEPAKNTR.NS",
  "Fine Organic": "FINEORG.NS",
  "Gravita": "GRAVITA.NS",
  "SBI Life": "SBILIFE.NS",
  "Infy": "INFY.NS",
  "Happeist Mind": "HAPPIEST.NS",
  "Easemytrip": "EASEMYTRIP.NS",
};

/**
 * FINAL Excel parser for the assignment Excel
 */
export const parseExcelFile = async (file) => {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: "",
  });

  const parsed = [];

  /**
   * Column positions from YOUR Excel:
   * [1] -> Particulars (Stock Name)
   * [2] -> Purchase Price
   * [3] -> Qty
   * [6] -> NSE/BSE
   */
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    const name = row[1];
    const purchasePrice = Number(row[2]);
    const quantity = Number(row[3]);
    const exchange = row[6] || "NSE";

    if (
      !name ||
      typeof name !== "string" ||
      Number.isNaN(purchasePrice) ||
      Number.isNaN(quantity)
    ) {
      continue;
    }

    const symbol = SYMBOL_MAP[name.trim()];

    // Skip stocks we cannot resolve
    if (!symbol) {
      console.warn("Symbol not found for:", name);
      continue;
    }

    parsed.push({
      name: name.trim(),
      symbol,
      exchange,
      sector: "Others",
      purchasePrice,
      quantity,
    });
  }

  return parsed;
};
