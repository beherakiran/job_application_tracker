
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext.js";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const password = event.target.password.value.trim();

    if (!name || !password) {
      alert("Please enter both name and password");
      return;
    }

    login(name);
    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
