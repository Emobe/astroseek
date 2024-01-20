import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LoginModal: React.FC<LoginModalProps> = ({isOpen, onClose}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box sx={style} component="form">
        sdfs
      </Box>
    </Modal>
  );
}

export default LoginModal;

