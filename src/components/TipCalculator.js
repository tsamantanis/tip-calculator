import React, { useState } from 'react';

function TipCalculator () {
    const [bill, setBill] = useState('')
    const [tip, setTip] = useState('')
    const [split, setSplit] = useState('')

    let tipAmount = (tip / 100) * bill;
    return (
        <div className="main">
            <form>
                <div className="input-item">
                    <label for="bill">Bill</label>
                    <br />
                    <input
                        id="bill"
                        name="bill"
                        type="decimal"
                        min="0"
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                    />
                </div>
                <div className="input-item">
                    <label for="tip">Tip %</label>
                    <br />
                    <input
                        id="tip"
                        name="tip"
                        type="decimal"
                        min="0"
                        max="100"
                        value={tip}
                        onChange={(e) => setTip(e.target.value )}
                    />
                </div>
                <div className="input-item">
                    <label for="split">Split</label>
                    <br />
                    <input
                        id="split"
                        name="split"
                        type="decimal"
                        min="1"
                        max="100"
                        value={split}
                        onChange={(e) => setSplit(e.target.value )}
                    />
                </div>
            </form>
            <div className="results">
                <h2>Tip Amount: { tipAmount.toFixed(2) }</h2>
                <h2>Total: { bill !== '' ? (parseFloat(bill) + parseFloat(tipAmount)).toFixed(2) : 0}</h2>
                <h2>Price per person: { split !== '' ? parseFloat((parseFloat(bill) + parseFloat(tipAmount)) / split).toFixed(2) : 0 } </h2>
            </div>
        </div>
    );
}

export default TipCalculator;
