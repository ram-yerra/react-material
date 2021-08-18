import React, { useState } from "react";
import Home from "./components/Home";
import Books from "./components/Books";
import Secret from "./components/Secret";
import UserCtx from "./components/UserCtx";
import Login from "./components/Login";
import Protected from "./components/Protected";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <UserCtx.Provider
        value={{
          isLoggedIn,
          doLogin: code =>
            code === "pizza" ? setIsLoggedIn(true) : setIsLoggedIn(false)
        }}
      >
        <div className="app">
          <h1>Book Store</h1>
          <div className="navigation">
            <Link to="/" id="home-link">
              Home
            </Link>
            <Link to="/books" id="books-link">
              Books
            </Link>
            <Link to="/secret" id="secret-link">
              Secret Collection
            </Link>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/books/:id?">
                <Books />
              </Route>
              <Protected isLoggedIn={isLoggedIn} path="/secret">
                <Secret />
              </Protected>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </div>
      </UserCtx.Provider>
    </BrowserRouter>
  );
};

export default App;
