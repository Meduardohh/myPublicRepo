import { Link } from "react-router-dom";

const NavbarProfile = () => {
  return (
    <div>
      <Link to="/adatlap">adatlap</Link>
      <br />
      <Link to="/ujpost">uj post</Link>
      <br />
      <Link to="/fasztudja">fasztudja</Link>
      <br />
    </div>
  );
};

export default NavbarProfile;
