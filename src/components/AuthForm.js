import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin, signup } from "../actions/auth";
import { useHistory } from "react-router-dom";
import { SWITCH_TO_LOGIN, SWITCH_TO_SIGNUP } from "../constants/actionTypes";
import "./AuthForm.css";


const AuthForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const currentOperation = useSelector(state => state.auth.currentOperation);
  const [passwordVisibility, setpasswordVisibility] = useState("password");

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const switchOperations = () => {
    currentOperation === "Login"
      ? dispatch({type : SWITCH_TO_SIGNUP })
      : dispatch({type : SWITCH_TO_LOGIN });
    clearForm();
  };

  const changePasswordVisibility = () => {
    passwordVisibility === "password"
      ? setpasswordVisibility("text")
      : setpasswordVisibility("password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentOperation === "Login") {
      dispatch(
        signin({ email: formData.email, password: formData.password }, history)
      );

    } else {
      dispatch(signup({ ...formData }, history));
    }

    clearForm();
  };

  return (
    <div className="auth_form-container">
      <div className="auth_form-title-container">
        <h3 className="auth_form-title">{currentOperation}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        {currentOperation === "Sign Up" && (
          <div className="auth_form-info-container top-border-radius">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
          </div>
        )}
        <div className="auth_form-info-container top-border-radius">
          <input
            type="Email"
            placeholder="Email"
            name="email"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
          />
        </div>
        <div className="auth_form-info-container bottom-border-radius">
          <input
            type={passwordVisibility}
            placeholder="Password"
            name="password"
            required
            minLength="6"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
          />
          <span
            onClick={changePasswordVisibility}
            className={
              passwordVisibility === "password"
                ? "display-eye fa fa-eye"
                : "display-eye fa fa-eye-slash"
            }
          ></span>
        </div>
        {currentOperation === "Login" ? (
          <div className="auth_goToSignup-btn-container">
            <span>You don't have an account?</span>
            <span onClick={switchOperations} className="auth_goToSignup-btn">
              Sign up
            </span>
          </div>
        ) : (
          <div className="auth_goToSignup-btn-container">
            <span>Already have an account?</span>
            <span onClick={switchOperations} className="auth_goToSignup-btn">
              Login
            </span>
          </div>
        )}
        <input
          className="auth_form-submit-btn"
          type="submit"
          value={currentOperation}
        />
      </form>
    </div>
  );
};

export default AuthForm;
