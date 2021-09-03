import "./Auth.css";
import auth_image from "../../assets/desk.svg";
import AuthForm from "../../components/AuthForm";

const Auth = () => {
  return (
    <div>
      <div className="auth_page-container">
        <div className="auth_image-container">
          <img alt="Buying from home" src={auth_image} />
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
