import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import * as yup from 'yup';

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
  display: 'flex',
  flexDirection: 'column'
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

const validationSchema = yup.object().shape({
  email: yup.string()
    .email('Enter a valid email address')
    .required('Enter a valid email address')
});


const LoginModal: React.FC<LoginModalProps> = ({isOpen, onClose}) => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });


  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box sx={style} component="form" onSubmit={formik.handleSubmit}>
        <TextField
          data-testid="email"
          label="Email Address"
          value={formik.values.email}
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          onChange={formik.handleChange}
          name="email"
        />
        <TextField
          name="password"
          data-testid="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
        />
        <Button type="submit">Login</Button>
      </Box>
    </Modal>
  );
}

export default LoginModal;

