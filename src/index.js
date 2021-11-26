import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouterSwitch from "./RouterSwitch";

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-9u-z0cnx.us.auth0.com"
      clientId="c0NVjg5uKWIheXkJySw3xp3ix3Ord8ze"
      redirectUri="http://localhost:3000/home"
    >
      <RouterSwitch />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
