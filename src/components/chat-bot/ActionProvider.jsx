import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';




const ActionProvider = ({ createChatBotMessage, setState, children }) => {


    const setChatBotMessage = (message) => {
        setState((state) => ({ ...state, messages: [...state.messages, message] }));
    };



    const carInquiryHandler = () => {
        const message = createChatBotMessage("Yes, I can definitely help with that! What is your booking number?");
        setChatBotMessage(message);
    };



  return (
    <div>
      {React.Children.map(children, (child) => {

        return React.cloneElement(child, {
          actions: {
            carInquiryHandler,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;