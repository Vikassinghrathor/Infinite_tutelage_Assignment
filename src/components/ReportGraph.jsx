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
        <div className="flex flex-wrap flex-1 gap-3.5 justify-between items-end w-[793px] h-[325.51px]">
          <div className="flex flex-col items-center">
            <div className="text-xs">Jan</div>
            <div className="bg-violet-400 rounded w-6 h-[189px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">Feb</div>
            <div className="bg-violet-400 rounded w-6 h-[118px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">Mar</div>
            <div className="bg-violet-400 rounded w-6 h-[221px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">Apr</div>
            <div className="bg-violet-400 rounded w-6 h-[63px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">May</div>
            <div className="bg-violet-400 rounded w-6 h-[254px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">Jun</div>
            <div className="bg-violet-400 rounded w-6 h-[148px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">Jul</div>
            <div className="bg-violet-400 rounded w-6 h-[171px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">Aug</div>
            <div className="bg-violet-400 rounded w-6 h-[85px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">Sep</div>
            <div className="bg-violet-400 rounded w-6 h-[108px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">Oct</div>
            <div className="bg-violet-400 rounded w-6 h-[138px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">Nov</div>
            <div className="bg-violet-400 rounded w-6 h-[33px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xs">Dec</div>
            <div className="bg-violet-400 rounded w-6 h-[83px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportGraph;
