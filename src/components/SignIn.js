import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

const SignIn = ({ auth }) => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignIn;
