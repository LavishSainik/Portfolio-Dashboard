const ExcelUpload = ({ onLoad }) => {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const { parseExcelFile } = await import("../utils/parseExcel");
    onLoad(await parseExcelFile(file));
  };

  return (
    <label className="cursor-pointer">
      <div className="px-6 py-3 rounded-xl bg-slate-800 text-white font-medium shadow-md hover:bg-slate-700 transition">
        Upload Portfolio Excel
      </div>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFile}
        className="hidden"
      />
    </label>
  );
};

export default ExcelUpload;
