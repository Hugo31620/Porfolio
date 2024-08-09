import Acceuil from "./acceuil/Acceuil";
import Apropos from "./apropos/Apropos";
import Portfolio from "./portfolio/Portfolio";
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Acceuil />} />
            <Route exact path={'/about'} element={<Apropos />} />
            <Route exact path={'/portfolio'} element={<Portfolio />} />
        </Routes>
    )
}