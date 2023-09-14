import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const theMessage = message.toLowerCase();
    if(theMessage.includes("car")){
        actions.carInquiryHandler();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {

          parse: parse,
          actions: {

          },
        });
      })}
    </div>
  );
};

export default MessageParser;