function TradingAccount() {
  const accounts = [
    {
      name: "Master Account",
      platform: "CTrader",
      id: "#273728",
      balance: "0.00",
      currency: "USD",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0a98edb6da6f91fdcf050ddf1987610af517337c1c89481afe88f2a74afac43c?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965",
    },
    {
      name: "Master Account",
      platform: "CTrader",
      id: "#273728",
      balance: "0.00",
      currency: "USD",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0a98edb6da6f91fdcf050ddf1987610af517337c1c89481afe88f2a74afac43c?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965",
    },
  ];

  return (
    <div className="flex flex-col p-4 rounded-xl border-2 border-gray-100 bg-[color:var(--sds-color-background-default-default)] max-w-xs md:max-w-md lg:max-w-lg">
      <div className="text-sm font-medium text-slate-700 mb-5">
        Trading Accounts
      </div>
      {accounts.map((account, index) => (
        <div
          key={index}
          className="flex flex-col p-4 mb-5 bg-gray-50 rounded-xl border border-gray-200"
        >
          <div className="text-xs font-semibold text-slate-700">
            {account.name}
          </div>
          <div className="flex items-center mt-3 text-xs font-medium">
            <div className="px-2 py-1 bg-gray-100 rounded-full text-slate-700 w-[63px]">
              {account.platform}
            </div>
            <div className="ml-2 text-gray-500">{account.id}</div>
          </div>
          <div className="flex justify-between items-center mt-3 text-slate-700">
            <div className="flex items-end">
              <div className="text-3xl font-bold leading-none">
                {account.balance}
              </div>
              <div className="ml-1 text-base font-medium">
                {account.currency}
              </div>
            </div>
            <img
              loading="lazy"
              src={account.imgSrc}
              alt={`${account.platform} icon`}
              className="w-6 h-6"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TradingAccount;
