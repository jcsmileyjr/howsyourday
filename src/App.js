import "./App.css";
import WeightedOption from "./components/weightedOption/WeightedOption";
import Message from "./components/message/Message";
import ThankYou from "./components/thankYou/ThankYou";
import React, { useState } from "react";
import emailjs from 'emailjs-com';

function App() {
  const [userMessage, setUserMessage] = useState("");
  const [userChoice, setUserChoice] = useState("");

  const getUserChoice = (choice) => {
    setUserChoice(choice);
    if(choice === 6){
      console.log(userMessage)
      emailMessage();
    }
  };

  const emailMessage = () => {
    var templateParams = {
      message: `${userMessage}`
    };
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });
  }

  return (
    <div className="UI-background">
      <main>
        {userChoice === "" && (
          <div>
            <p className="personalize__message--style"><span className="animate-charcter">Ameerah</span>, my precious child</p>
            <h1>How was your day?</h1>
            <p>
              Every day is different. Some days are a blessing and others feel
              like a curse. I want to know how was your day today?
            </p>
            <WeightedOption getChoice={getUserChoice} />
          </div>
        )}

        {userChoice === 1 && (
          <Message
            getChoice={getUserChoice}
            comment1="I'm sorry you had an aweful day."
            comment2 = "Tell me about it."
            getMessage={setUserMessage}
          />
        )}
        {userChoice === 2 && (
          <Message
            getChoice={getUserChoice}
            comment1="Today wasn't a good day."
            comment2="What happened."
            getMessage={setUserMessage}
          />
        )}
        {userChoice === 3 && (
          <Message
            getChoice={getUserChoice}
            comment1="Okay, today was 'so so'."
            comment2="What's the scoop."
            getMessage={setUserMessage}
          />
        )}
        {userChoice === 4 && (
          <Message
            getChoice={getUserChoice}
            comment1="Woohoo, today was a good day."
            comment2="I wanna know the details!"
            getMessage={setUserMessage}
          />
        )}
        {userChoice === 5 && (
          <Message
            getChoice={getUserChoice}
            comment1="Wow, tell me what made this day so Awesome!!!"
            comment2=""
            getMessage={setUserMessage}
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
