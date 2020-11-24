import React from 'react'
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const delayTime = urlParams.get('delayTime') || 3000;
  const isMultipleRedirect = urlParams.get('multipleRedirect');
  const isAutoRedirectRedirect = urlParams.get('autoRedirect');

  const history = useHistory();

  if (isAutoRedirectRedirect) {
    setTimeout(() => {
      history.push("/about")
    }, delayTime)
  }

  const redirectToPage = () => {
    history.push("/about")
    if (isMultipleRedirect) {
      setTimeout(() => {
        history.push("/contact")
      }, 2000)
    }
  }

  const handleLogin = () => {
    setTimeout(() => {
      redirectToPage()
    }, delayTime)
  }

  const handleSingleRequest = () => {
    console.log("Hello World")
    const delay = Math.ceil(delayTime / 1000);
    fetch(`https://reqres.in/api/users?delay=${delay}`)
      .then(() => console.log('done'))
      .catch((err) => console.error(err))
      .finally(() => {
        redirectToPage()
      })
  }

  const handleMultipleRequest = () => {
    const urls = [
      'https://reqres.in/api/users/1',
      'https://reqres.in/api/users/2',
      'https://reqres.in/api/users/3'
    ];
    Promise.all(urls.map(u=>fetch(u)))
      .then(() => console.log('done'))
      .catch((err) => console.error(err))
      .finally(() => {
        redirectToPage()
      })
  }

  const handleMultipleURLRequest = () => {
    const delay = Math.ceil(delayTime / 1000);
    fetch(`https://reqres.in/api/users?delay=${delay}`)
      .then(() => console.log('done'))
      .catch((err) => console.error(err))
      .finally(() => {
        history.push("/about")
        // setTimeout(() => {
        //   history.push("/contact")
        // }, 2000)
        setTimeout(() => {
          history.push("/multiple-2")
        }, 2000)
        // setTimeout(() => {
        //   history.push("/multiple-2")
        // }, 8000)
      })
  }

  return (
    <section id="login-section">
      <p>SPA Login test</p>
      <div>
        <button id="login" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div>
        <Link to="/about" id="about-link">About</Link>
      </div>
      <div>
        <button id="single-request" onClick={handleSingleRequest}>
          Single request
        </button>
      </div>
      <div>
        <button id="multiple-request" onClick={handleMultipleRequest}>
          Multiple requests
        </button>
      </div>
      <div>
        <button id="multiple-url-link" onClick={handleMultipleURLRequest}>
          Multiple URL Changes
        </button>
      </div>
    </section>
  );
};

export default Login;
