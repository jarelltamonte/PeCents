import React from 'react';
import './HomePage.css';
import Navbar from "./Navbar";

function HomePage() {
    return (
        <div className="App">
            <main>
                <div className="Dashboard">
                    <h1 style={{ fontSize: "50px" }}> Pecents Monsense</h1>
                    <br></br>

                    <div className="Dashboard-container">
                        {/* Column 1 */}
                        <div className="Dashboard-column">
                            <div className="Funds">
                                <h2 className="Funds-name">Welcome, Spongebob</h2>
                                <h2 className="Funds-value">$100</h2>
                            </div>

                            <div className="Dashbuttons">
                                <button style={{ flex: "1" }}>MTS</button>
                                <button>DEPOSIT</button>
                                <button>WITHDRAW</button>
                            </div>

                            <div>
                                <h1>Savings Plans Display</h1>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="Dashboard-column">
                            <h1>GRAPH</h1>
                            <div className="C2-Description">
                                <h3> Total Funds Deposited: $0 💀</h3>
                                <h3> Total Funds Withdrawn: $1,000,000 </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div> /* APP DIV FINISH */
    );
}

export default HomePage;

