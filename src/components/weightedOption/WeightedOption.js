import './weightedOption.css';

const weightedOption = ({}) => {
    let radioOptions = [];

    for(let i=0;i<=4;i++){
        let newID = `weightedOption${i}`
        radioOptions.push(
          <button key={i} id={newID} type="button" className='weightedOption__button--style'>{i}</button>
        )
    }

    return (
        <section className='weightedOption__buttonPanel--container'>
            {radioOptions}
        </section>
    )
}

export default weightedOption;