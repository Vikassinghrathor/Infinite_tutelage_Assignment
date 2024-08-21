function Header() {
  return (
    <div className="header-component flex items-center justify-between px-6 py-5 w-[1194px] h-[75px]">
      {/* Dashboard Title */}
      <div className="text-lg font-semibold text-slate-700">Dashboard</div>

      {/* Search and Notification */}
      <div className="flex items-center gap-4 w-full max-w-md sm:w-auto">
        {/* Search Bar */}
        <div className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm sm:min-w-[240px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba1a32d9c712d26c88ee30aa53392d71587664107366c971e876d49cbfe01e1f?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
            className="w-4 h-4 mr-2"
            alt="Search Icon"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none"
          />
        </div>

        {/* Notification Icon */}
        <div className="flex items-center justify-center w-10 h-10 p-2 bg-white border border-gray-200 rounded-lg shadow-sm">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b23c34c3305c718dbc8cf0eea64283ab632dd319568de2ad1c5fe3d10a1f5bc7?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
            className="w-4 h-4"
            alt="Notification Icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
