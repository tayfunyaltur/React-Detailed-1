import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="Profile">Prifle</Link>
      <Link to="Contact">Contact</Link>
    </div>
  );
};

export default Navbar;
