import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserCtx from "./UserCtx";

const Login = () => {
  const { isLoggedIn, doLogin } = useContext(UserCtx);
  const history = useHistory();

  useEffect(() => {
    isLoggedIn && history.replace({ pathname: "/secret" });
  }, [isLoggedIn, history]);
  return (
    <div className="login">
      <input
        type="password"
        id="login-passcode"
        placeholder="Enter password & press enter..."
        onKeyUp={e => {
          if (e.keyCode === 13) {
            // Do Login
            doLogin(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default Login;
