import * as yup from 'yup';

export const schemaRegistration = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email incorreto'),
  password: yup
    .string()
    .required('Senha obrigatório')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&!@#])[0-9a-zA-Z$*&!@#]{8,}$/,
      'Senha fraca'
    ),
  passwordConfirmation: yup
    .string()
    .required('Confirmação de senha obrigatória')
    .oneOf([yup.ref('password')], 'Senha não correspondem'),
  bio: yup.string().required('Bio obrigatório'),
  contact: yup.string().required('Contato obrigatório'),
  course_module: yup.string().required('Curso do módulo obrigatório'),
});
