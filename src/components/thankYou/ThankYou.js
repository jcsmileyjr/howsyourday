import "./thankYou.css";
import RedHeart from "../../images/red-border-heart.jpg";

const ThankYou = ({message}) => {
    return(
        <section className="thankyou--container">
            <img className="thankyou__image--style" src={RedHeart} alt="" />
            <h1 className="thankyou__message--style">{message}</h1>
        </section>
    );
}

export default ThankYou;