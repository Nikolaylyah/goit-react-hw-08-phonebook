import { Link } from "react-router-dom";
import FormRegister from "../components/Form/FormRegister";

function RegisterPage() {
  return (
    <div>
      <h1>RegisterPage</h1>
      <p>
        Already have an account?
        <Link to="/login">Sign in</Link>
      </p>
      <FormRegister title="register" />
    </div>
  );
}

export default RegisterPage;
