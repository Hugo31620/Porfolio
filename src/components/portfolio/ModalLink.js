import React, { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

function ModalLink({ description, probleme, probleme2, probleme3, probleme4, probleme5, solution, title, icon }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen} startIcon={<i className={icon}></i>}>
                {title}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box 
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 1500,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: '25px'
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {description}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {probleme}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {probleme2}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {probleme3}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {probleme4}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {probleme5}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {solution}
                    </Typography>
                    <Button onClick={handleClose} sx={{ mt: 2 }}>
                        Fermer
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default ModalLink;