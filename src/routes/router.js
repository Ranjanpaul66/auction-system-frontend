import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "../components/auth/login";
import Registration from "../components/auth/registration";
import routesData from "./routesData";
const Router = () => {
    const pageRoutes = routesData.map(({ path, title, element }) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};

export default Router;
