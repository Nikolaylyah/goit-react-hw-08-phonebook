import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/user/userOperations";

function FormRegister({ title }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form>
      <input
        type="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="name"
        autoComplete="off"
      />
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
FormRegister.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FormRegister;
