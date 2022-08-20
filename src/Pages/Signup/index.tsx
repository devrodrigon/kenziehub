import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRegistration } from '../../validators/registration';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../styles/buttons';
import { Title1, Headline, Label } from '../../styles/typography';
import { Form } from '../Login/styles';
import { ContainerSignup, StyledSelect } from './styles';

import LabelInputGroup from '../../Components/LabelInputGroup';

import logo from '../../assets/logo.svg';
import { FormHelperText, MenuItem } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export interface FormDataSignup {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
  bio?: string;
  contact?: string;
  course_module?: string;
  title?: string;
  status?: string;
  description?: string;
  deploy_url?: string;
}

function Signup() {
  const navigate = useNavigate();

  const handleClickBackButton = () => {
    navigate('/login', { replace: true });
  };

  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataSignup>({
    resolver: yupResolver(schemaRegistration),
  });

  const onSubmitForm = (data: FormDataSignup) => {
    createUser(data);
  };

  return (
    <ContainerSignup initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <img src={logo} alt="logo kenzie" />
        <Button onClick={handleClickBackButton} variant="backButton">
          Voltar
        </Button>
      </div>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Title1>Crie sua conta</Title1>
        <Headline>Rapido e grátis, vamos nessa</Headline>

        <LabelInputGroup
          labelName="Nome"
          nameField="name"
          placehoder="Digite aqui seu nome"
          register={register}
          errors={errors}
        />
        <LabelInputGroup
          labelName="Email"
          nameField="email"
          placehoder="Digite aqui seu email"
          register={register}
          errors={errors}
        />
        <LabelInputGroup
          labelName="Senha"
          nameField="password"
          placehoder="Digite aqui sua senha"
          register={register}
          errors={errors}
        />
        <LabelInputGroup
          labelName="Confirmar Senha"
          nameField="passwordConfirmation"
          placehoder="Digite novamente sua senha"
          register={register}
          errors={errors}
        />
        <LabelInputGroup
          labelName="Bio"
          nameField="bio"
          placehoder="Fale sobre você"
          register={register}
          errors={errors}
        />
        <LabelInputGroup
          labelName="Contato"
          nameField="contact"
          placehoder="Opção de contato"
          register={register}
          errors={errors}
        />
        <div className="divSelect">
          <Label>Selecionar módulo</Label>

          <StyledSelect
            error={!!errors.course_module}
            defaultValue=""
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            {...register('course_module')}
          >
            <MenuItem value="">
              <em>Selecionar módulo</em>
            </MenuItem>
            <MenuItem value="Modulo 1">Modulo 1</MenuItem>
            <MenuItem value="Modulo 2">Modulo 2</MenuItem>
            <MenuItem value="Modulo 3">Modulo 3</MenuItem>
            <MenuItem value="Modulo 4">Modulo 4</MenuItem>
            <MenuItem value="Modulo 5">Modulo 5</MenuItem>
            <MenuItem value="Modulo 6">Modulo 6</MenuItem>
          </StyledSelect>
          {errors.course_module && (
            <FormHelperText sx={{ mt: -2, ml: 2 }} error>
              {errors.course_module.message}
            </FormHelperText>
          )}
        </div>

        <Button type="submit" variant="primary">
          Cadastrar
        </Button>
      </Form>

      <ToastContainer
        position="top-right"
        autoClose={700}
        theme="dark"
        pauseOnHover={false}
      />
    </ContainerSignup>
  );
}

export default Signup;
