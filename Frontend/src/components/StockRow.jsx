import { useState } from "react";
import GainLossCell from "./GainLossCell";
import { formatCurrency } from "../utils/formatters";

const StockRow = ({ stock }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      
      {/* Main Row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        {/* Identity */}
        <div className="flex flex-col min-w-[200px]">
          <span className="font-semibold text-slate-800">
            {stock.name}
          </span>
          <span className="text-xs text-slate-500 mt-0.5">
            Qty {stock.quantity}
          </span>
        </div>

        {/* Prices */}
        <div className="flex flex-col text-center min-w-[160px]">
          <span className="text-xs uppercase tracking-wide text-slate-400">
            CMP
          </span>
          <span className="text-lg font-medium text-slate-800">
            {formatCurrency(stock.cmp)}
          </span>
          <span className="text-xs text-slate-400">
            Buy {formatCurrency(stock.purchasePrice)}
          </span>
        </div>

        {/* Performance */}
        <div className="flex flex-col items-end min-w-[180px]">
          <GainLossCell value={stock.gainLoss} />
          <span className="text-xs text-slate-500 mt-1">
            {stock.portfolioPercent}% of portfolio
          </span>
        </div>
      </button>

      {/* Expandable Details */}
      {open && (
        <div className="px-6 pb-5 pt-2 bg-slate-50 text-sm text-slate-600 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-xs uppercase text-slate-400">Investment</div>
            <div className="font-medium">
              {formatCurrency(stock.investment)}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase text-slate-400">
              Present Value
            </div>
            <div className="font-medium">
              {formatCurrency(stock.presentValue)}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase text-slate-400">P/E</div>
            <div className="font-medium">
              {stock.peRatio ?? "—"}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase text-slate-400">
              Earnings
            </div>
            <div className="font-medium">
              {stock.latestEarnings ?? "—"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockRow;
