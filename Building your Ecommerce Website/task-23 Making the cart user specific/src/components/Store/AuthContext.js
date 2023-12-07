import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    //removeing @ and . from email
    email = email.replace(/[^\w\s]/gi, "");

    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  useEffect(() => {
    let logoutTimer;

    if (userIsLoggedIn) {
      logoutTimer = setTimeout(() => {
        logoutHandler();
        alert("You have been logged out due to inactivity.");
      }, 50 * 60 * 1000);
    }

    return () => clearTimeout(logoutTimer);
  }, [userIsLoggedIn]);

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
