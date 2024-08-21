const quickLinks = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e45cfaa543cbb0774389e5009aa1bd6a2ae856dc70a3b658c0d2eea4594d1b32?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "Deposit" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/47d1f5b5ca7ef65467618c0fcc6261e92a5dadd3687ed64652dd59ba60b34b83?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "Withdraw" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3748e098fb3cfd9b4761f784a96707e1fa24e56833d1e0bf53541125bb0192cd?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "Settings" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cffefd1d1c6e7643dc7a82e9b6d58f4f628a858f07a3080b9924f1f0e52623e?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "Verification" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be100d25cbe97964a73b4ac0c4c1427e9c2579cbdc26cd63cb3d25aea37e5ea7?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "Bonuses" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb374bc35ce6a88aad0d4763cd2d1d3eaa81a8917e8b87e08019a759b874f0a9?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "MT5" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b65ecb992f0cee697c4b6996fcf84700989c0098b1d14b8d790426db0f6e44?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "Transfer" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c65efe51012fccf7f70b1d64659da8e97c00f5c3643cdd9c3a6b3928a2d28054?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "History" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a524943e747836aa3a229a735c49e32c64c94d3977e9b4cb5428395ff649c996?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "Partner" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93e3ddbee5547dac08e0dbe7a99dc5af09c62ecf4206bc8416ddef358c77c022?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "Exchange" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa6cefe9d997356a3050d5154dd1ffec2059be12f0d709b5b7ee606962e6ce91?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965", label: "Analytics" }
];

const QuickLinks = () => {
  return (
    <section className="flex flex-col p-4 text-sm font-medium rounded-xl border-2 border-gray-100 bg-[color:var(--sds-color-background-default-default)] max-w-full md:max-w-[793px] text-slate-700">
      <h2 className="text-lg font-semibold">Quick Links</h2>
      <div className="flex flex-wrap gap-2 mt-4">
        {quickLinks.map((link, index) => (
          <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img src={link.icon} alt={link.label} className="w-6 h-6" />
            <span>{link.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
