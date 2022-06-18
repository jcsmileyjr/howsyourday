import './weightedOption.css';
import React, { useState, useEffect } from "react";

const WeightedOption = () => {
    const [highlightButton, setHighlightButton] = useState("");

    useEffect(() => {
        console.log(highlightButton)
    }, [highlightButton]);

    let radioOptions = [];

    for(let i=1;i<=5;i++){
        let newID = `weightedOption${i}`
        radioOptions.push(
          <button key={i} onClick={() => setHighlightButton(newID)} id={newID} type="button" className={`weightedOption__button--style ${highlightButton === newID?'highlightButton':''}`}>{i}</button>
        )
    }
//weightedOption__button--style
    return (
        <section className='weightedOption__buttonPanel--container'>
            {radioOptions}
        </section>
    )
}

export default WeightedOption;