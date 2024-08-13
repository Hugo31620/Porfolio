import React from 'react';
import IconLink from './IconLink';
import ModalLink from './ModalLink';
import { Box } from '@mui/material';

function PortfolioBlock({ image, title, source, description, probleme, probleme2, probleme3, probleme4, probleme5, solution, competence }) {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mb={4}>
      <Box
        component="img"
        src={image}
        alt="mockup"
        border="4px solid #CA6BE6"
        borderRadius="5px"
        sx={{ marginBottom: '20px', marginTop: '40px' }}
      />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className="portfolio"
        display="flex"
        flexDirection="column"
        gap="0.5rem"
        alignItems="center"
        fontSize="1.5rem"
        py="2rem"
      >
        <Box p={1} border="2px solid black" borderRadius="25px">
          <ModalLink description={description} probleme={probleme} probleme2={probleme2} probleme3={probleme3} probleme4={probleme4} probleme5={probleme5} solution={solution} competence={competence} title="Description" icon="fa fa-folder-open" />
        </Box>
        <Box p={1} border="2px solid black" borderRadius="25px">
          <IconLink link={source} title="Code Github" icon="fa fa-code" />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;