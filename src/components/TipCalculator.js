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
                    <label for="bill">Bill: {bill}</label>
                    <br />
                    <input
                        id="bill"
                        name="bill"
                        type="number"
                        min="0"
                        value={bill}
                        onChange={(e) => setBill(e.target.value )}
                    />
                </div>
                <div className="input-item">
                    <label for="tip">Tip %: {tip}</label>
                    <br />
                    <input
                        id="tip"
                        name="tip"
                        type="number"
                        min="0"
                        max="100"
                        value={tip}
                        onChange={(e) => setTip(e.target.value )}
                    />
                </div>
                <div className="input-item">
                    <label for="split">Split: {split}</label>
                    <br />
                    <input
                        id="split"
                        name="split"
                        type="number"
                        min="1"
                        max="100"
                        value={split}
                        onChange={(e) => setSplit(e.target.value )}
                    />
                </div>
            </form>
            <div className="results">
                <h2>Tip Amount: { tipAmount }</h2>
                <h2>Total: { bill !== '' ? parseInt(bill) + parseInt(tipAmount) : 0}</h2>
                <h2>Price per person: { split !== '' ? parseInt((parseInt(bill) + parseInt(tipAmount)) / split).toFixed(2) : 0 } </h2>
            </div>
        </div>
    );
}

export default TipCalculator;
