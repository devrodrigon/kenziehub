import * as yup from 'yup';

export const schemaRegistrationTech = yup.object().shape({
  title: yup.string().required('Tech obrigatório'),
  status: yup.string().required('Status obrigatório'),
});
