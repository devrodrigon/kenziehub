import * as yup from 'yup';

export const schemaAuthentication = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email incorreto'),
  password: yup.string().required('Senha obrigatória'),
});
