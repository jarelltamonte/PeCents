// HomePage.js
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

    // Deposit & Withdraw
    const handleDeposit = () => {
        const amount = parseFloat(prompt("Enter deposit amount:"));
        if (!isNaN(amount) && amount > 0) setFunds(prev => prev + amount);
        else alert("Enter a valid number");
    };

    const handleWithdraw = () => {
        const amount = parseFloat(prompt("Enter withdraw amount:"));
        if (!isNaN(amount) && amount > 0) {
            if (amount <= funds) setFunds(prev => prev - amount);
            else alert("Insufficient funds");
        } else alert("Enter a valid number");
    };

    // MTS button: add to SavingsPage totalSavings
    const handleMTS = () => {
        const amount = parseFloat(prompt("Enter amount to move to savings:"));
        if (!isNaN(amount) && amount > 0) {
            if (amount <= funds) {
                setFunds(prev => prev - amount);
                // Store moved amount in localStorage so SavingsPage can read it
                const pending = parseFloat(localStorage.getItem('pendingAdd')) || 0;
                localStorage.setItem('pendingAdd', pending + amount);
                alert(`₱${amount} moved to Savings!`);
            } else {
                alert("Insufficient funds");
            }
        }
    };

    const formattedFunds = `$${funds.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <div className="App">
            <main>
                <div className="Dashboard">
                    <h1 style={{ fontSize: "50px" }}>Percents</h1>
                    <br />
                    <div className="Dashboard-container">
                        <div className="Dashboard-column">
                            <div className="Funds">
                                <h2 className="Funds-name">Welcome, Spongebob</h2>
                                <h2 className="Funds-value">{formattedFunds}</h2>
                            </div>

                            <div className="Dashbuttons" style={{ display: "flex", gap: "10px" }}>
                                <button style={{ flex: 1 }} onClick={handleMTS}>MTS</button>
                                <button onClick={handleDeposit}>DEPOSIT</button>
                                <button onClick={handleWithdraw}>WITHDRAW</button>
                            </div>
                            <div>
                                <h1>Savings Plans Display</h1>
                            </div>
                        </div>

                        <div className="Dashboard-column">
                            <h1>GRAPH</h1>
                            <div className="C2-Description">
                                <h3>Total Funds Deposited: $0 💀</h3>
                                <h3>Total Funds Withdrawn: $1,000,000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
