import "./App.css";
import WeightedOption from "./components/weightedOption/WeightedOption";
import Message from "./components/message/Message";
import ThankYou from "./components/thankYou/ThankYou";
import React, { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState("");
  const [userChoice, setUserChoice] = useState("");

  const getUserChoice = (choice) => {
    setUserChoice(choice);
    console.log(choice); // TESTING
  };

  return (
    <div className="UI-background">
      <main>
        {userChoice === "" && (
          <div>
            <h1>How was your day</h1>
            <p>
              Every day is different. Some days are a blessing and others feel
              like a curse. I want to know how was your day today?
            </p>
            <WeightedOption getChoice={getUserChoice} />
            <button type="button" className="main__button--style">
              SEND
            </button>
          </div>
        )}

        {userChoice === 1 && (
          <Message
            getChoice={getUserChoice}
            comment="I'm sorry you had an aweful day. Tell me about it."
          />
        )}
        {userChoice === 2 && (
          <Message
            getChoice={getUserChoice}
            comment="Today wasn't a good day. What happened."
          />
        )}
        {userChoice === 3 && (
          <Message
            getChoice={getUserChoice}
            comment="Okay, today was so so. What's the scoop."
          />
        )}
        {userChoice === 4 && (
          <Message
            getChoice={getUserChoice}
            comment="Woohoo, today was a good day. I wanna know the details!"
          />
        )}
        {userChoice === 5 && (
          <Message
            getChoice={getUserChoice}
            comment="Wow, tell me what made this day so Awesome!!!"
          />
        )}
        {userChoice === 6 && (
          <ThankYou message="I can't wait to read your message!!!" />
        )}
        {userChoice === 7 && (
          <ThankYou message="I understand. I LOVE YOU !!!" />
        )}
      </main>
    </div>
  );
}

export default App;
