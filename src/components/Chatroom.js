import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "@firebase/firestore";
import SignOut from "./SignOut";
import ChatMessage from "./ChatMessage";

const Chatroom = ({ auth, firestore }) => {
  const messagesRef = collection(firestore, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(messagesQuery, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      );
    });
    return () => unsubscribe();
  }, []); // eslint-disable-line

  useEffect(() => console.log(messages), [messages]); //* debugging

  return (
    <>
      <header>
        <SignOut auth={auth} />
      </header>
      <div className="messages">
        {messages &&
          messages.map(msg => {
            console.log(msg);
            return <ChatMessage key={msg.id} message={msg} />;
          })}
      </div>
    </>
  );
};

export default Chatroom;
