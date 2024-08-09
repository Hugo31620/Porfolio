import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid } from '@mui/material';
import { info } from '../../info/Info';

export default function Portfolio({ innerRef }) {
  return (
    <Box id="portfolio" ref={innerRef}>
      <Grid container display="flex" justifyContent="center" spacing={2}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <PortfolioBlock
              image={project.image}
              title={project.title}
              description={project.description}
              probleme={project.probleme}
              probleme2={project.probleme2}
              probleme3={project.probleme3}
              probleme4={project.probleme4}
              probleme5={project.probleme5}
              solution={project.solution}
              source={project.source}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}