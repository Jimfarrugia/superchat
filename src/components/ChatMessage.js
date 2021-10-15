const ChatMessage = ({ message, auth }) => {
  const { text, uid } = message;
  const { currentUser } = auth;
  const { photoURL } = currentUser;

  const messageClass = uid === currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="" height="32" width="32" />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
