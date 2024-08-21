function OpenTrades() {
  const trades = [
    {
      pair: "GBPUSD",
      type: "Long",
      volume: "0.12",
      profit: "+56.00",
      profitCurrency: "USD",
      profitColor: "text-green-600",
      bgColor: "bg-emerald-50",
    },
    {
      pair: "USDJPY",
      type: "Long",
      volume: "0.52",
      profit: "-0.09",
      profitCurrency: "USD",
      profitColor: "text-red-600",
      bgColor: "bg-emerald-50",
    },
    {
      pair: "EURUSD",
      type: "Short",
      volume: "0.34",
      profit: "-1.09",
      profitCurrency: "USD",
      profitColor: "text-red-600",
      bgColor: "bg-rose-100",
    },
  ];

  return (
    <div className="flex flex-col p-4 rounded-xl border-2 border-gray-100 bg-[color:var(--sds-color-background-default-default)] max-w-xs md:max-w-md lg:max-w-lg">
      <div className="text-sm font-medium text-slate-700">Open Trades</div>
      {trades.map((trade, index) => (
        <div
          key={index}
          className="flex flex-col p-4 mt-5 bg-gray-50 rounded-xl border border-gray-200"
        >
          <div className="flex justify-between items-center text-xs font-medium">
            <div className="flex items-center gap-2.5">
              <div className="text-gray-500">{trade.pair}</div>
              <div
                className={`px-2 py-1 rounded-full ${trade.bgColor} text-slate-700`}
              >
                {trade.type}
              </div>
            </div>
            <div className="text-gray-500">{trade.volume}</div>
          </div>
          <div className="flex items-end gap-0.5 mt-2">
            <div className={`text-base font-bold ${trade.profitColor}`}>
              {trade.profit}
            </div>
            <div className="text-sm font-medium text-slate-700">
              {trade.profitCurrency}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OpenTrades;
