import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';

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

interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = {
  email: '',
  password: ''
};

const onSubmit = (values: LoginFormValues) => {};

const validate = () => {};

const LoginModal: React.FC<LoginModalProps> = ({isOpen, onClose}) => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box sx={style} component="form" onSubmit={formik.handleSubmit}>
        <TextField
          label="Email Address"
          value={formik.values.email}
        />
        <TextField
          label="Password"
          value={formik.values.password}
        />
        <Button type="submit">Login</Button>
      </Box>
    </Modal>
  );
}

export default LoginModal;

