import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./firebase";
import Chatroom from "./components/Chatroom";
import SignIn from "./components/SignIn";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) return setUser(user);
      else return setUser(null);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        {user ? (
          <Chatroom auth={auth} firestore={firestore} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
    </div>
  );
};

export default App;
