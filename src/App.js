import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import SavingsPage from "./SavingsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/savings" element={<SavingsPage />} />
        </Routes>
      </Router>
      <main>
        <div className="Dashboard">
          <h1>Hello mga pare, gawin ko to paguwi. Chill muna sa page na ito</h1>
          <br></br>

          <div className="Dashboard-container">
            {/* Column 1 */}
            <div className="Dashboard-column">
              <div className="Funds">
                <h1 className="Funds-name">Welcome, Spongebob</h1>
                <h1 className="Funds-value">$100</h1>
              </div>

              <div className="Dashbuttons">
                <button style={{ flex: "1" }}>MTS</button>
                <button>Deposit</button>
                <button>Withdraw</button>
              </div>

              <div>
                <h1>Savings Plans Display</h1>
              </div>
            </div>

            {/* Column 2 */}
            <div className="Dashboard-column">
              <h1>GRAPH</h1>
              <div className="C2-Description">
                <h4> Total Funds Deposited: $0 💀</h4>
                <h4> Total Funds Withdrawn: $1,000,000 </h4>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div> /* APP DIV FINISH */
  );
}

export default App;
