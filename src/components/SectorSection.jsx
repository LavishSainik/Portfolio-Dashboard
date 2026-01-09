import SectorSummary from "./SectorSummary";
import PortfolioTable from "./PortfolioTable";

const SectorSection = ({ sector, data }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200">
      {/* Sector Header */}
      <div className="px-8 py-6 border-b bg-slate-50 rounded-t-3xl">
        <h2 className="text-2xl font-semibold text-slate-800">
          {sector}
        </h2>
      </div>

      {/* Summary */}
      <div className="px-8 py-6">
        <SectorSummary sectorData={data} />
      </div>

      {/* Table */}
      <div className="px-8 pb-8">
        <PortfolioTable stocks={data.stocks} />
      </div>
    </div>
  );
};

export default SectorSection;
