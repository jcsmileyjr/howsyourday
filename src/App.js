import './App.css';
import WeightedOption from './components/weightedOption/WeightedOption';
import Message from './components/message/Message';
import React, {useState} from 'react';

function App() {
  const [showMessage, setShowMessage] = useState("");
  const [userChoice, setUserChoice] = useState("");

  const getUserChoice = (choice) => {
    setUserChoice(choice);
    console.log(choice); // TESTING
  }

  return (
    <div className='UI-background'>
      <main>
        {userChoice === "" &&
          <div>
            <h1>How was your day</h1>
            <p>Every day is different. Some days are a blessing and others feel like a curse. I want to know how was your day today?</p>
            <WeightedOption getChoice= {getUserChoice} />
            <button type="button" className='main__button--style'>SEND</button>
          </div>
        }
        {userChoice === 5 &&
          <Message comment="Wow, tell me what made this day so Awesome!!!" />
        }
      </main>

    </div>
  );
}

export default App;
