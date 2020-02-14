import * as React from "react";
import { hydrate } from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { routes } from "../core/routes/routes.client";

hydrate(
    <BrowserRouter>
         <App routes={routes} />
    </BrowserRouter>,  
    document.querySelector("#app")
);