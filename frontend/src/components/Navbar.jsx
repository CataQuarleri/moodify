import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full flex justify-between bg-violet-100 items-center  pr-4 md:pr-40  pl-4 md:pl-32 h-20">
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20" />
        </Link>
        <h5 className="text-indigo-100 font-logo text-3xl">Moodify</h5>
      </div>
      <ul className="flex gap-4 text-indigo-100 font-primary text-lg">
        <li className="hover:underline underline-offset-4 decoration-turquoise-100">
          <Link to="/login">Log in</Link>
        </li>
        <li className="hover:underline underline-offset-4 decoration-turquoise-100">
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
