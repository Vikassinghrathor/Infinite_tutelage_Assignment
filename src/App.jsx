import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import QuickLinks from "./components/Quicklinks";
import ReportGraph from "./components/ReportGraph";
import TradingAccount from "./components/TradingAccount";
import OpenTrades from "./components/OpenTrades";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header className="header-component" />
        <div className="content">
          <div className="left-side">
            <QuickLinks />
            <ReportGraph />
          </div>
          <div className="right-side">
            <TradingAccount />
            <OpenTrades />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
