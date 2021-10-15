import SignOut from "./SignOut";

const Chatroom = ({ auth }) => {
  return (
    <div>
      <SignOut auth={auth} />
    </div>
  );
};

export default Chatroom;
