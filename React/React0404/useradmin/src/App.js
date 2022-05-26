import "./App.css";
import UserForm from "./components/UserForm";
import UserManagementScreen from "./views/UserManagementScreen";
import Chat from "./components/Chat";

function App() {
  // useEffect(() => {
  //   readUser()
  //     .then((snapshot) => console.log(snapshot.val()))
  //     .catch((e) => console.log(e));
  // },[]);

  // useEffect(()=>{
  //   createUser({
  //     email:"valami@valami.com",
  //     username:"asd",
  //     name:"faszom",
  //     gender:"apache helikopter",
  //     other:"otter"
  //   })
  //   .then(response=> console.log(response))
  //   .catch(e=>console.log(e))
  // },[])
  return <div className="App">
    {/* <UserManagementScreen/>
    <UserForm/> */}
    <Chat/>
  </div>;
}

export default App;
