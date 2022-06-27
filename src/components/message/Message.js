import "./message.css";

const Message = ({comment}) => {
    return(
        <section className="message--container">
            <p>{comment}</p>
            <textarea rows="10" />
        </section>
    );
}

export default Message;