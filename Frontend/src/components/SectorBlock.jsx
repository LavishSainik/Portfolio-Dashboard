import SectorStats from "./SectorStats";
import StockRow from "./StockRow";

const SectorBlock = ({ sector, data }) => {
  return (
    <section className="relative bg-white rounded-[28px] shadow-lg border border-slate-200 overflow-hidden">
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 px-10 py-6 bg-white/90 backdrop-blur border-b">
        <h2 className="text-2xl font-semibold text-slate-800">
          {sector}
        </h2>
      </div>

      {/* Stats */}
      <div className="px-10 py-6">
        <SectorStats data={data} />
      </div>

      {/* Divider */}
      <div className="mx-10 h-px bg-slate-200" />

      {/* Stocks */}
      <div className="px-8 py-8 space-y-4">
        {data.stocks.length === 0 ? (
          <div className="text-center text-slate-400 text-sm py-8">
            No stocks in this sector
          </div>
        ) : (
          data.stocks.map((stock, idx) => (
            <StockRow key={idx} stock={stock} />
          ))
        )}
      </div>
    </section>
  );
};

export default SectorBlock;
