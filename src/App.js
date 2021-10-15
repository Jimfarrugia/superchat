import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";
import Chatroom from "./components/Chatroom";
import SignIn from "./components/SignIn";
import "./App.css";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

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
