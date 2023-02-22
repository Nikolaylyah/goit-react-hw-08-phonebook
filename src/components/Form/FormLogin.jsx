import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/user/userOperations";

function FormLogin({ title }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
        autoComplete="off"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
        autoComplete="off"
      />
      <button type="submit" onClick={handleSubmit}>
        {title}
      </button>
    </form>
  );
}
FormLogin.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FormLogin;
