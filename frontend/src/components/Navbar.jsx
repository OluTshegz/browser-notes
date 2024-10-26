import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";

const Navbar = () => {
  const handleLogout = (e) => {
    e.preventDefault();
  };

  const { user } = useAuth();

  return (
    <>
      <div className="text-1.5xl">Navbar</div>
      <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Browser Notes</Link>
        </div>
        <input
          type="text"
          placeholder="Search for your notes.."
          className="bg-gray-600 px-4 py-2 rounded"
        />
        <div>
          { (!user) ? (
            <>
              <Link to="/login" className="bg-blue-500 px-4 py-2 rounded mr-4">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 px-4 py-2 rounded mr-4"
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="mr-4">{ user.name }</span>
              <button
                onClick={ handleLogout }
                className="bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
