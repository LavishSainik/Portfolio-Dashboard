import GainLossCell from "./GainLossCell";
import { formatCurrency } from "../utils/formatters";

const headers = [
  "Stock",
  "Qty",
  "Buy Price",
  "Investment",
  "CMP",
  "Present Value",
  "Gain / Loss",
  "%",
  "P/E",
  "Earnings",
];

const PortfolioTable = ({ stocks }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="min-w-full text-sm text-slate-700">
        <thead className="bg-slate-100">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="px-5 py-4 text-left font-semibold text-slate-600"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {stocks.map((s, i) => (
            <tr
              key={i}
              className="border-t hover:bg-slate-50 transition"
            >
              <td className="px-5 py-4 font-medium text-slate-800">
                {s.name}
              </td>
              <td className="px-5 py-4">{s.quantity}</td>
              <td className="px-5 py-4">
                {formatCurrency(s.purchasePrice)}
              </td>
              <td className="px-5 py-4">
                {formatCurrency(s.investment)}
              </td>
              <td className="px-5 py-4 font-semibold">
                {formatCurrency(s.cmp)}
              </td>
              <td className="px-5 py-4">
                {formatCurrency(s.presentValue)}
              </td>
              <td className="px-5 py-4">
                <GainLossCell value={s.gainLoss} />
              </td>
              <td className="px-5 py-4">
                {s.portfolioPercent}%
              </td>
              <td className="px-5 py-4">
                {s.peRatio ?? "--"}
              </td>
              <td className="px-5 py-4">
                {s.latestEarnings ?? "--"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
