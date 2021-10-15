import "./App.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firebaseConfig } from "./config";
import Chatroom from "./Chatroom";
import SignIn from "./SignIn";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header"></header>
      {/* <section>{user ? <Chatroom /> : <SignIn auth={auth} />}</section> */}
    </div>
  );
};

export default App;
