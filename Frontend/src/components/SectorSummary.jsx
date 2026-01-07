import GainLossCell from "./GainLossCell";
import { formatCurrency } from "../utils/formatters";

const SectorSummary = ({ sectorData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      <div>
        <div className="text-sm text-slate-500 uppercase tracking-wide">
          Investment
        </div>
        <div className="mt-1 text-xl font-semibold text-slate-800">
          {formatCurrency(sectorData.totalInvestment)}
        </div>
      </div>

      <div>
        <div className="text-sm text-slate-500 uppercase tracking-wide">
          Present Value
        </div>
        <div className="mt-1 text-xl font-semibold text-slate-800">
          {formatCurrency(sectorData.totalPresentValue)}
        </div>
      </div>

      <div>
        <div className="text-sm text-slate-500 uppercase tracking-wide">
          Gain / Loss
        </div>
        <div className="mt-1 text-xl">
          <GainLossCell value={sectorData.totalGainLoss} />
        </div>
      </div>
    </div>
  );
};

export default SectorSummary;
