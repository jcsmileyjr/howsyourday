import './weightedOption.css';
import React, { useState, useEffect } from "react";
import ButtonExpressions from '../buttonExpressions/ButttonExpressions';
import AngelEmojii from '../../images/female-angel-emojii.png';

const WeightedOption = ({getChoice}) => {
    const [highlightButton, setHighlightButton] = useState("");

    useEffect(() => {
    }, [highlightButton]);

    let radioOptions = [];

    for(let i=1;i<=5;i++){
        let newID = `weightedOption${i}`
        radioOptions.push(
          <button key={i} aria-label={`Rate option ${i}`} onClick={() => {setHighlightButton(newID); getChoice(i)}} id={newID} type="button" className={`weightedOption__button--style ${highlightButton === newID?'highlightButton':''}`}>
            {i === 1 &&
                <ButtonExpressions optionNumber={i} expressionImage={AngelEmojii} />
            }
            {i === 2 &&
                <ButtonExpressions optionNumber={i} expressionImage={AngelEmojii} />
            }
            {i === 3 &&
                <ButtonExpressions optionNumber={i} expressionImage={AngelEmojii} />
            }
            {i === 4 &&
                <ButtonExpressions optionNumber={i} expressionImage={AngelEmojii} />
            }
            {i === 5 &&
                <ButtonExpressions optionNumber={i} expressionImage={AngelEmojii} />
            }  
          </button>
        )
    }

    return (
        <section className='weightedOption__buttonPanel--container'>
            {radioOptions}
        </section>
    )
}

export default WeightedOption;