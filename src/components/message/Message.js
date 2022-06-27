import "./message.css";
import "../../App.css";

const Message = ({comment, getChoice}) => {
    return(
        <section className="message--container">
            <h1>{comment}</h1>
            <textarea rows="10" />
            <button className="main__button--style" onClick={() => getChoice(6)} type="button" >Send message to Daddy</button>
            <button className="noComment__button--style" onClick={() => getChoice(7)} type="button">No Comment</button>
        </section>
    );
}

export default Message;