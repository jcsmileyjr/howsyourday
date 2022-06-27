import './weightedOption.css';
import React, { useState, useEffect } from "react";

const WeightedOption = ({getChoice}) => {
    const [highlightButton, setHighlightButton] = useState("");

    useEffect(() => {
    }, [highlightButton]);

    let radioOptions = [];

    for(let i=1;i<=5;i++){
        let newID = `weightedOption${i}`
        radioOptions.push(
          <button key={i} onClick={() => {setHighlightButton(newID); getChoice(i)}} id={newID} type="button" className={`weightedOption__button--style ${highlightButton === newID?'highlightButton':''}`}>{i}</button>
        )
    }

    return (
        <section className='weightedOption__buttonPanel--container'>
            {radioOptions}
        </section>
    )
}

export default WeightedOption;