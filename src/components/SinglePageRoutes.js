import Acceuil from "./acceuil/Acceuil";
import Apropos from "./apropos/Apropos";
import Portfolio from "./portfolio/Portfolio";
import React from 'react';
import { Box } from "@mui/material";

export default function SinglePageRoutes({refs}) {
    return (<Box mt={'3rem'}>
        <Acceuil innerRef={refs.refHome}/>
        <Apropos innerRef={refs.refApropos}/>
        <Portfolio innerRef={refs.refPortfolio}/>
    </Box>)
}