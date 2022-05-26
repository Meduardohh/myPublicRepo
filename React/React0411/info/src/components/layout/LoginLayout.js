import { Outlet } from "react-router-dom"


const LoginLayout=()=>{
    return <div className="login-box">
    <div className="box">
    <Outlet/>
  </div>
</div>
}

export default LoginLayout