import React from 'react'
import { useHistory } from "react-router-dom";

const Login = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const delayTime = urlParams.get('delayTime') || 3000;

  const history = useHistory();

  const handleLogin = () => {
    setTimeout(() => {
      history.push("/about")
    }, delayTime)
  }

  return (
    <section id="login-section">
      <p>SPA Login test</p>
      <button id="login" onClick={handleLogin}>
        Login
      </button>
    </section>
  );
};

export default Login;
