import { Link } from "react-router-dom";
import FormLogin from "../components/Form/FormLogin";

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>
        <Link to="/register">register</Link>
      </p>
      <FormLogin title="sign up" />
    </div>
  );
}

export default LoginPage;
