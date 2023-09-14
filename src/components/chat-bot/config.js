import { createChatBotMessage } from 'react-chatbot-kit';
const botName = 'Justin';
const config = {
  initialMessages: [createChatBotMessage(`Hey there im ${botName} how can I help you today?`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },

  },
};

export default config;