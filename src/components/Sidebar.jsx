function Sidebar() {
  return (
    <div className="sidebar flex flex-col border-r border-solid border-gray-100 h-full overflow-y-auto">
      <div className="flex flex-col pt-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <div className="flex gap-0.5 items-center text-xs text-lime-300">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/006e3e11f8e3c7a12aefe20209fa3e5f88d7147f5d5e2c39135bf15a31bfecc5?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
              className="object-contain w-full aspect-[2.09]"
              alt="Logo"
            />
            <div className="my-auto">®</div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="mt-14 flex flex-col w-full">
          {[
            { name: "Dashboard", iconSrc: "f43ead7b6d3dd8a342e475d788512bbd261a4e925dd0dc6c28774c44b476c6a9" },
            { name: "CRM", iconSrc: "4f8f8bbf559b1a28b5b74c6b9617f2d5218fca340af3bb16ba518a272ea89446" },
            { name: "MAM", iconSrc: "adac35552ee44af5df5537700c65491c8f43037657f172a85a2029b33d72d846" },
            { name: "PAMM", iconSrc: "eb1286bf1414ab0bb29234476d669463e0283753625e0fbb0191f32ced3b181a" },
            { name: "Trade", iconSrc: "f4a38ec775948fb1034fc3ba5605e1c1161d50c86c47a199c557d5db8b2e8ded" },
            { name: "Wallet", iconSrc: "15d4ff9c95895a588802436df665bd827492bd4b82102455a50b7bc924073232" },
            { name: "Accounts", iconSrc: "6693afc91f0cb2aca44f3d84f01374956a8abbe892701f39c11049945d950a1c" },
            { name: "History", iconSrc: "8d75b3d74c6bf58665d8e994d96885e08ab47595b3a347c72b25329fa40060b0" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center py-3 px-6 mt-2 hover:bg-violet-500 hover:text-white cursor-pointer"
            >
              <img
                loading="lazy"
                src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${item.iconSrc}?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965`}
                className="object-contain aspect-square w-[18px]"
                alt={item.name}
              />
              <div className="ml-3">{item.name}</div>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col mt-auto pb-6">
        {[
          { name: "Notifications", iconSrc: "a305683074efd61182baa6af33b1fa3a010e67b168a2bd84635760e7af0dd112" },
          { name: "Settings", iconSrc: "94b4a9b5cc797a613269a43b920bee78c04372d4960ddd8a0f89ff79833cf973" },
          { name: "Help & Support", iconSrc: "bc396100f915e4694766af9b58ed6ec26fb9f61b19ab992b68cbb9ce6afb4193" },
          { name: "Log Out", iconSrc: "1e7ebf2abcc48481b4a24a3fbb5bfb352ead09e6870e1a5a9b3c59b26a57bbee" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center py-3 px-6 mt-2 hover:bg-violet-500 hover:text-white cursor-pointer"
          >
            <img
              loading="lazy"
              src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${item.iconSrc}?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965`}
              className="object-contain aspect-square w-[18px]"
              alt={item.name}
            />
            <div className="ml-3">{item.name}</div>
          </div>
        ))}
        <div className="border-t border-violet-300 my-2" />

        {/* Profile Section */}
        <div className="flex items-center px-6 py-3">
          <div className="bg-white bg-opacity-10 p-2 rounded-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fca000f3a4d3777a20eedf386f79ee342e4057205d61d8a602993d34c8714758?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
              className="object-contain aspect-square w-[18px]"
              alt="Profile"
            />
          </div>
          <div className="ml-3 text-white">
            <div className="text-base font-medium">Shyam Shakur</div>
            <div className="text-sm mt-1">shyam01.shankur@mail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
