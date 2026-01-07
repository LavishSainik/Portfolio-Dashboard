const SummaryCard = ({ label, value, highlight = false }) => {
  const isPositive =
    typeof value === "number" ? value >= 0 : true;

  return (
    <div
      className={`rounded-2xl bg-white px-6 py-8 shadow-lg border transition
        ${
          highlight
            ? isPositive
              ? "border-emerald-200"
              : "border-rose-200"
            : "border-slate-200"
        }
      `}
    >
      <div className="text-sm text-slate-500 uppercase tracking-wide">
        {label}
      </div>

      <div
        className={`mt-3 text-3xl font-bold ${
          highlight
            ? isPositive
              ? "text-emerald-600"
              : "text-rose-600"
            : "text-slate-800"
        }`}
      >
        {typeof value === "number"
          ? `₹${value.toLocaleString("en-IN")}`
          : value}
      </div>
    </div>
  );
};

export default SummaryCard;
