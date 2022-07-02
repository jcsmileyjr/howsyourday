import './buttonExpressions.css';
//import AngelEmojii from '../../images/female-angel-emojii.png'

const ButtonExpressions = ({expressionImage, optionNumber}) => {
    return (
        <div>
            <img className="buttonExpression__image--style" src={expressionImage} alt="" />
            <p>{optionNumber}</p>
        </div>
    );
}

export default ButtonExpressions;