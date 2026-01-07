import GainLossCell from "./GainLossCell";
import { formatCurrency } from "../utils/formatters";

const SectorStats = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Invested
        </div>
        <div className="mt-2 text-2xl font-semibold text-slate-800">
          {formatCurrency(data.totalInvestment)}
        </div>
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Current Value
        </div>
        <div className="mt-2 text-2xl font-semibold text-slate-800">
          {formatCurrency(data.totalPresentValue)}
        </div>
      </div>

      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Gain / Loss
        </div>
        <div className="mt-2 text-2xl">
          <GainLossCell value={data.totalGainLoss} />
        </div>
      </div>
    </div>
  );
};

export default SectorStats;
