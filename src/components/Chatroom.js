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
    const unsubscribe = onSnapshot(
      messagesQuery,
      querySnapshot => {
        setMessages(querySnapshot.docs.map(doc => doc.data()));
      },
      error => console.log(error)
    );
    return unsubscribe;
  });

  return (
    <>
      <header>
        <SignOut auth={auth} />
      </header>
      <div className="messages">
        {messages &&
          messages.map(msg => <ChatMessage key={msg.uid} message={msg} />)}
      </div>
    </>
  );
};

export default Chatroom;
