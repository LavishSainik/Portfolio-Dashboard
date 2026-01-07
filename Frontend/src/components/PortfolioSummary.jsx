import SummaryCard from "./SummaryCard";

const PortfolioSummary = ({ summary }) => {
  return (
    <section className="mb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold text-slate-700 mb-6 text-center">
          Portfolio Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <SummaryCard
            label="Total Investment"
            value={summary.totalInvestment}
          />

          <SummaryCard
            label="Current Value"
            value={summary.currentValue}
          />

          <SummaryCard
            label="Total Gain / Loss"
            value={summary.totalGainLoss}
            highlight
          />

          <SummaryCard
            label="Return %"
            value={`${summary.returnPercent}%`}
            highlight
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSummary;
