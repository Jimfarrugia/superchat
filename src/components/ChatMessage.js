const ChatMessage = ({ message, auth }) => {
  const { text, uid, photoURL } = message;
  const { currentUser } = auth;

  const messageClass = uid === currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
