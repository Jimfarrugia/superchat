import { signOut } from "@firebase/auth";

const SignOut = ({ auth }) => {
  return (
    (auth && auth.currentUser && (
      <button onClick={() => signOut(auth)}>Sign Out</button>
    )) ||
    null
  );
};

export default SignOut;
