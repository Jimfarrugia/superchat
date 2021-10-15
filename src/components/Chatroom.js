import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  addDoc,
  Timestamp,
} from "@firebase/firestore";
import SignOut from "./SignOut";
import ChatMessage from "./ChatMessage";

const Chatroom = ({ auth, firestore }) => {
  const messagesRef = collection(firestore, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(messagesQuery, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      );
    });
    return () => unsubscribe();
  }, []); // eslint-disable-line

  useEffect(() => console.log(messages), [messages]); //* debugging

  const handleSendMessage = async e => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: Timestamp.now(),
      uid,
      photoURL,
    });

    setFormValue("");
  };

  return (
    <>
      <header>
        <SignOut auth={auth} />
      </header>
      <main className="messages">
        {messages &&
          messages.map(msg => {
            console.log(msg);
            return <ChatMessage key={msg.id} message={msg} auth={auth} />;
          })}
      </main>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={e => setFormValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Chatroom;
