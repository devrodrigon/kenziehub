import { useContext, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useNavigate } from 'react-router-dom';

import { Container, Form, InputField, StyledOutlinedInput } from './styles';
import { Title1, Label, HeadlineBold } from '../../styles/typography';
import { Button } from '../../styles/buttons';

import { FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import logo from '../../assets/logo.svg';

import { schemaAuthentication } from '../../validators/authentication';
import { ToastContainer } from 'react-toastify';
import { UserContext } from '../../context/UserContext';

export interface FormData {
  email: string;
  password: string;
}

function Login() {
  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaAuthentication),
  });

  const onSubmitForm = async (data: FormData) => {
    login(data);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickSignup = () => {
    navigate('/signup', { replace: true });
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <img src={logo} alt="logo kenzie" />
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Title1>Login</Title1>

        <div>
          <Label htmlFor="outlined-error-helper-text">Email</Label>
          <InputField
            error={!!errors.email}
            id="outlined-error-helper-text"
            label=""
            placeholder="Digite aqui seu email"
            helperText={errors.email?.message}
            {...register('email')}
          />
        </div>
        <div>
          <Label htmlFor="outlined-adornment-password">Senha</Label>
          <StyledOutlinedInput
            error={!!errors.password}
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            placeholder="Digite sua senha aqui"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityOff htmlColor="#868E96" />
                  ) : (
                    <Visibility htmlColor="#868E96" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label=""
            {...register('password')}
          />
          {errors.password && (
            <FormHelperText error id="accountId-error" sx={{ mt: -2, ml: 2 }}>
              {errors.password.message}
            </FormHelperText>
          )}
        </div>

        <Button type="submit" variant="primary">
          Entrar
        </Button>

        <HeadlineBold>Ainda não possui uma conta?</HeadlineBold>

        <Button onClick={handleClickSignup} variant="grey1">
          Cadastre-se
        </Button>
      </Form>
      <ToastContainer
        position="top-right"
        autoClose={700}
        theme="dark"
        pauseOnHover={false}
      />
    </Container>
  );
}

export default Login;
