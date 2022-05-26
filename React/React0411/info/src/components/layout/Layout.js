import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';


const Layout=()=>{


    return (<>
    <Navbar/>
    <Outlet></Outlet>
    </>)

}

export default Layout