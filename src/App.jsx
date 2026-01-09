import { usePortfolioData } from "./hooks/usePortfolioData";
import ExcelUpload from "./components/ExcelUploads";
import PortfolioSummary from "./components/PortfolioSummary";
import SectorBlock from "./components/SectorBlock";
import { groupBySector } from "./utils/groupBySector";
import { calculatePortfolioSummary } from "./utils/calculatePortfolioSummary";

function App() {
  const { stocks, error, setRawData } = usePortfolioData();
  const sectors = groupBySector(stocks);
  const summary = calculatePortfolioSummary(stocks);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-slate-800">
            Portfolio Dashboard
          </h1>
          <p className="mt-2 text-slate-500 text-lg">
            Visualize and track your investments clearly
          </p>
        </div>

        {/* Upload */}
        <div className="flex justify-center mb-12">
          <ExcelUpload onLoad={setRawData} />
        </div>

        {/* Summary */}
        <PortfolioSummary summary={summary} />

        {/* Warning */}
        {error && (
          <div className="max-w-4xl mx-auto mb-10 rounded-xl border border-amber-200 bg-amber-50 px-6 py-4 text-amber-800 text-center">
            {error}
          </div>
        )}

        {/* Sectors */}
        <div className="space-y-14">
          {Object.values(sectors).map((s) => (
            <SectorBlock
              key={s.sector}
              sector={s.sector}
              data={s}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
