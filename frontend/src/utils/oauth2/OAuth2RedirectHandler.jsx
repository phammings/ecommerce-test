import React from "react";
import { Redirect } from "react-router-dom";

import { ACCOUNT } from "../../constants/routeConstants";

const OAuth2RedirectHandler = () => {
    const url = window.location;
    const token = new URLSearchParams(url.search).get("token");

    if (token) {
        localStorage.setItem("token", token);
    }

    return <Redirect to={ACCOUNT} />;
};

export default OAuth2RedirectHandler;
