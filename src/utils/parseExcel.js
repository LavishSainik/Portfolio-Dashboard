import * as XLSX from "xlsx";

/**
 * Maps company names (from Excel) → Yahoo Finance symbols
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
 * FINAL Excel parser — sector-aware, assignment compliant
 */
export const parseExcelFile = async (file) => {
  const buffer = await file.arrayBuffer();
  const workbook = XLSX.read(buffer);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  // Read as raw rows (IMPORTANT)
  const rows = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
    defval: "",
  });

  const parsed = [];
  let currentSector = "Others"; // fallback only

  /**
   * Column positions from YOUR Excel:
   * [1] -> Particulars (Stock / Sector Name)
   * [2] -> Purchase Price
   * [3] -> Qty
   * [6] -> NSE/BSE
   */
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    const name = row[1]?.toString().trim();
    const purchasePrice = Number(row[2]);
    const quantity = Number(row[3]);
    const exchange = row[6] || "NSE";

    // 🟢 SECTOR HEADER ROW
    if (name && Number.isNaN(purchasePrice) && Number.isNaN(quantity)) {
      currentSector = name;
      continue;
    }

    // 🟢 INVALID / EMPTY ROW
    if (
      !name ||
      Number.isNaN(purchasePrice) ||
      Number.isNaN(quantity)
    ) {
      continue;
    }

    const symbol = SYMBOL_MAP[name];

    // Skip unresolved stocks
    if (!symbol) {
      console.warn("Symbol not found for:", name);
      continue;
    }

    parsed.push({
      name,
      symbol,
      exchange,
      sector: currentSector, // ✅ KEY FIX
      purchasePrice,
      quantity,
    });
  }

  if (parsed.length === 0) {
    throw new Error("Excel file contains no valid stock rows");
  }

  return parsed;
};
