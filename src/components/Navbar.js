import "./Navbar.css";
import { NavLink, useLocation} from "react-router-dom";
import { showModal } from "../actions/modal";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from "../constants/actionTypes";
import { useEffect } from "react";
import {setUser} from "../actions/user";

const Navbar = () => {
  const user = useSelector((state) => state.auth.authData);
  const dispatch = useDispatch();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
  };

  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
  }, [location, dispatch]);

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand-name">
        Store
      </NavLink>
      <div className="navbar-btns">
        {user ? (
          <div className="navbar-btn" onClick={() => dispatch(showModal())}>
            Add Item
          </div>
        ) : (
          <NavLink to="/auth" className="navbar-btn">
            Login
          </NavLink>
        )}

        {user ? (
          <div className="navbar-btn" onClick={logout}>
            Logout
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
