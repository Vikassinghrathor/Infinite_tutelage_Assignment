function ReportGraph() {
  return (
    <div className="flex flex-col w-[793px] h-[455.51px] px-4 pt-4 pb-8 rounded-xl border-2 border-gray-100 border-solid bg-[color:var(--sds-color-background-default-default)]">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full text-sm font-medium">
        <div className="text-slate-700">Overview</div>
        <div className="flex gap-2 items-center px-2 py-1 text-violet-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1fd5063747c4166095ae09c780bbb31f6ff31e87a20c2003bf53baaaa417231?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
            className="object-contain w-6 h-6"
          />
          <div>Download Report</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-center mt-6 text-sm font-medium">
        <div className="p-2 text-gray-400 rounded-lg bg-gray-100 w-20 text-center">Monthly</div>
        <div className="p-2 bg-violet-100 rounded-lg text-slate-800 w-20 text-center">Yearly</div>
      </div>
      <div className="flex flex-wrap gap-3 items-end mt-6 w-full text-xs font-semibold text-gray-400">
        <div className="flex flex-col justify-between items-center min-h-[296px]">
          <div>$1500</div>
          <div>$1000</div>
          <div>$500</div>
          <div>$250</div>
          <div>0</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a2a32f7ce098c4c9611a8996dcdc371868d996b5433e695ad86a1b7930b0d52?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
          className="object-contain w-0 stroke-[1px] stroke-gray-200"
        />
        <div className="flex flex-wrap flex-1 gap-3.5 justify-between items-end w-[793px] h-[340.51px]">
          {[
            { month: "Jan", height: "189px" },
            { month: "Feb", height: "118px" },
            { month: "Mar", height: "221px" },
            { month: "Apr", height: "63px" },
            { month: "May", height: "254px" },
            { month: "Jun", height: "148px" },
            { month: "Jul", height: "171px" },
            { month: "Aug", height: "85px" },
            { month: "Sep", height: "108px" },
            { month: "Oct", height: "138px" },
            { month: "Nov", height: "33px" },
            { month: "Dec", height: "83px" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-violet-400 rounded w-6" style={{ height: item.height }} />
              <div className="text-xs mt-2">{item.month}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReportGraph;