const GainLossCell = ({ value }) => {
  if (value == null) {
    return <span className="text-slate-400">—</span>;
  }

  const positive = value >= 0;

  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold ${
        positive ? "text-emerald-600" : "text-rose-600"
      }`}
    >
      <span className="text-lg">
        {positive ? "▲" : "▼"}
      </span>
      ₹{Math.abs(value).toLocaleString("en-IN")}
    </span>
  );
};

export default GainLossCell;
