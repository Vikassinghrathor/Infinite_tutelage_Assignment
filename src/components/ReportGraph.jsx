
const ReportGraph = () => {
  return (
    <div
      className={`w-[793px] rounded-xl bg-colors-surface-c-surface-default1 border-gray-100 border-[2px] border-solid box-border max-w-full overflow-hidden flex flex-col items-start justify-start pt-[13px] px-3.5 pb-[29px] gap-6 leading-normal text-left text-sm text-gray-700 font-single-line-body-base`}
    >
      {/* Header with Overview and Download Report */}
      <div className="self-stretch flex flex-row items-start justify-between py-1 pl-0 pr-2 gap-5 mq268:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
          <a className="relative font-medium text-inherit inline-block min-w-[64px]" href="#">
            Overview
          </a>
        </div>
        <div className="flex flex-row items-start justify-start gap-2 text-brand-1">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt="Download"
            src="/downloadline.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
            <a className="relative font-medium text-inherit inline-block min-w-[116px]" href="#">
              Download Report
            </a>
          </div>
        </div>
      </div>

      {/* Filters (Monthly, Yearly) */}
      <div className="w-[184px] flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-[22px] box-border gap-x-2 gap-y-1.5 text-base text-gray-400">
        <div className="rounded-radius-200 flex flex-row items-start justify-start p-space-200">
          <div className="relative inline-block min-w-[62px]">Monthly</div>
        </div>
        <div className="flex-1 rounded-lg bg-lavender flex flex-row items-start justify-start py-space-200 px-3.5 text-gray-800">
          <div className="relative inline-block min-w-[48px]">Yearly</div>
        </div>
      </div>

      {/* Graph with Bars */}
      <section className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10.3px] max-w-full text-left text-xs text-gray-400 font-manrope">
        <div className="flex flex-col items-start justify-start gap-[57.6px]">
          <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
            <div className="relative font-semibold inline-block min-w-[35px] whitespace-nowrap">
              $1500
            </div>
          </div>
          <div className="relative font-semibold inline-block min-w-[36px] whitespace-nowrap">
            $1000
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-1.5 pr-0">
            <div className="relative font-semibold inline-block min-w-[30px] whitespace-nowrap">
              $500
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-1.5 pr-0">
            <div className="relative font-semibold inline-block min-w-[30px] whitespace-nowrap">
              $250
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pl-7 pr-0">
            <div className="relative font-semibold inline-block min-w-[8px]">0</div>
          </div>
        </div>
        <img
          className="h-[295.5px] w-px relative min-h-[296px]"
          loading="lazy"
          alt="Graph Line"
          src="/vector-14.svg"
        />
        <div className="flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[13.6px] min-w-[492px] max-w-full mb-[-16px] pb-4 mq560:min-w-full">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
            (month, index) => (
              <div
                key={month}
                className="h-[295.5px] flex flex-row items-start justify-start py-0 px-2 box-border relative gap-[3.2px]"
              >
                <div className="absolute bottom-[-16.4px] leading-[110%] font-semibold inline-block min-w-[21px]">
                  {month}
                </div>
                <div
                  className={`self-stretch w-[26px] relative rounded-t-8xs-8 rounded-b-none bg-brand-1 ${
                    index === 0 || index === 2 ? "pt-[74.5px]" : "pt-[177.5px]"
                  }`}
                />
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default ReportGraph;
