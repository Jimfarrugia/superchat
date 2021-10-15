const ChatMessage = ({ message }) => {
  const { text } = message;
  return <p>{text}</p>;
};

export default ChatMessage;
