import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firebaseConfig } from "./config";
import Chatroom from "./components/Chatroom";
import SignIn from "./components/SignIn";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        {user ? <Chatroom auth={auth} /> : <SignIn auth={auth} />}
      </section>
    </div>
  );
};

export default App;
