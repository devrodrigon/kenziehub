import * as yup from 'yup';

export const schemaRegistrationWork = yup.object().shape({
  title: yup.string().required('Título obrigatório'),
  description: yup.string().required('Descrição obrigatório'),
  deploy_url: yup.string().required('Url é obrigatório').url('Informe uma url'),
});
