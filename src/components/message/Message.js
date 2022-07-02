import "./message.css";
import "../../App.css";
import GoBack from "../../images/undo-circle-outline.png";

const Message = ({comment1,comment2, getChoice, getMessage}) => {
    return(
        <section className="message--container">
            <div className="message__img--container">
                <button type="button" className="message__imgButton--style" onClick={() => getChoice("")}>
                    <img className="message__img--style" src={GoBack} alt="" />
                </button>
            </div>
            <h1 className="message__header--container">{comment1} <span className="messsage__secondLine--style">{comment2}</span></h1>
            <textarea onChange={(e)=> getMessage(e.target.value)} rows="10" />
            <button className="main__button--style" onClick={() => getChoice(6)} type="button" >Send message to Daddy</button>
            <button className="noComment__button--style" onClick={() => getChoice(7)} type="button">No Comment</button>
        </section>
    );
}

export default Message;