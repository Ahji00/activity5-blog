import React from 'react'; 
import { NavLink, useNavigate } from 'react-router-dom';
import { getUser, logout } from '../utils/auth';
import '../css/login.css';

export default function Navbar() {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <span>Hi, {user.username}</span>
            <NavLink to="/create-post" className={({ isActive }) => isActive ? 'active' : ''}>
              Create Post
            </NavLink>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
              Login
            </NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
