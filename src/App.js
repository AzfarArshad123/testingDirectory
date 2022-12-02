import Header from "components/Header/Header";
// import "./Components/Style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import oidc from "./config";
import { API_URL } from "api/endpoints";
import LoginLanding from "components/Login/LoginLanding";
import Login from "components/Login/Login";
import React, { useState, useEffect } from "react";

function getOperatingSystem(window) {
  let operatingSystem = "Not known";
  if (window.navigator.appVersion.indexOf("Win") !== -1) {
    operatingSystem = "windows";
  }
  if (window.navigator.appVersion.indexOf("Mac") !== -1) {
    operatingSystem = "ios";
  }
  if (window.navigator.appVersion.indexOf("X11") !== -1) {
    operatingSystem = "unix";
  }
  if (window.navigator.appVersion.indexOf("Linux") !== -1) {
    operatingSystem = "linux";
  }

  return operatingSystem;
}

const OS = getOperatingSystem(window);
function App() {
  //const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("login_response") === null) {
      let loginUrl = `${API_URL}/user/login?_format=json`;
      if (loginUrl.includes("undefined")) {
        loginUrl = loginUrl.replace("undefined/", "");
      }

      fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "restclient",
          pass: "FcqLxjZcJCD8ncH",
        }),
      })
        .then((data) => data.json())
        .then((json) =>
          localStorage.setItem("login_response", JSON.stringify(json))
        );
    }
  }, []);
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    // navigate(toRelativeUrl(originalUri, window.location.origin));
  }; 

  const oktaAuth = new OktaAuth(oidc);
  return (
    <div class={OS}>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginLanding />} />
            <Route path="/home" element={<Header />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/callback" component={LoginCallback} />
          </Routes>
        </Router>
      </Security>
    </div>
  );
}

export default App;
