

const loggedIn = <div>You are logged in</div>;
const loggedOut = <div>You are not logged in</div>;


const User = (props) => {
  return <>{props.logged ? loggedIn : loggedOut}</>;
};

export default User;
