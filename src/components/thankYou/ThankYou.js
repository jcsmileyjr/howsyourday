import "./thankYou.css";
import RedHeart from "../../images/red-border-heart.jpg";

const ThankYou = () => {
    return(
        <section className="thankyou--container">
            <img className="thankyou__image--style" src={RedHeart} alt="" />
            <h1>I can't wait to read your message!!!</h1>
        </section>
    );
}

export default ThankYou;