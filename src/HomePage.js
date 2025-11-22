import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Navbar from "./Navbar";

function HomePage() {
    const [funds, setFunds] = useState(() => {
        const saved = localStorage.getItem('funds');
        return saved ? parseFloat(saved) : 100;
    });

    // Update localStorage whenever funds change  
    useEffect(() => {
        localStorage.setItem('funds', funds);
    }, [funds]);

    const handleDeposit = () => {
        const amount = prompt("Enter deposit amount:");
        const numAmount = parseFloat(amount);

        if (!isNaN(numAmount) && numAmount > 0) { setFunds(prev => prev + numAmount); }
        else { alert("Please enter a valid number"); }
    };

    const handleWithdraw = () => {
        const amount = prompt("Enter withdraw amount:");
        const numAmount = parseFloat(amount); if (!isNaN(numAmount) && numAmount > 0) {
            if (numAmount <= funds) { setFunds(prev => prev - numAmount); }
            else { alert("Insufficient funds"); }
        }
        else { alert("Please enter a valid number"); }
    };

    const formattedFunds = `$${funds.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <div className="App">
            <main>
                <div className="Dashboard">
                    <h1 style={{ fontSize: "50px" }}> Pecents</h1>
                    <br></br>

                    <div className="Dashboard-container">
                        {/* Column 1 */}
                        <div className="Dashboard-column">
                            <div className="Funds">
                                <h2 className="Funds-name">Welcome, Spongebob</h2>
                                <h2 className="Funds-value">{formattedFunds}</h2>
                            </div>

                            <div className="Dashbuttons">
                                <button style={{ flex: "1" }}>MTS</button>
                                <button onClick={handleDeposit}>DEPOSIT</button>
                                <button onClick={handleWithdraw}>WITHDRAW</button>
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

