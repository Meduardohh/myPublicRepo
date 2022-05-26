import { Outlet } from "react-router-dom";
import NavbarProfile from "../NavbarProfile";

const ProfileLayout = () => {
 
  return (
    <div>
      <NavbarProfile />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
