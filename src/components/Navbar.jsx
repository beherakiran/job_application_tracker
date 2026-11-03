
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext.js';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="flex gap-6 p-4 bg-gray-100">
      <Link to="/">Dashboard</Link>
      <Link to="/applications">Applications</Link>
      <Link to="/add-application">Add Application</Link>
      <Link to="/explore-jobs">Explore Jobs</Link>

      <span>Welcome, {user.name}</span>

      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
