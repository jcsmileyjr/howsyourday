import "./message.css";
import "../../App.css";

const Message = ({comment}) => {
    return(
        <section >
            <form className="message--container">
                <h1>{comment}</h1>
                <textarea rows="10" />
                <button className="main__button--style" type="submit" >Submit</button>
            </form>
        </section>
    );
}

export default Message;