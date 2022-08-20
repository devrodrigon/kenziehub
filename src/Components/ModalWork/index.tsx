import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LabelInputGroup from '../LabelInputGroup';

import { FormDataSignup } from '../../Pages/Signup';

import { Button } from '../../styles/buttons';
import { Form, ModalContainer, ModalInner } from '../Modal/styles';

import { Title3 } from '../../styles/typography';

import { Location, useLocation, useParams } from 'react-router-dom';

import { WorkContext } from '../../context/WorkContext';
import { schemaRegistrationWork } from '../../validators/registrationWork';
import { Work } from '../../data/UserInterface';
import { useOutsideClick } from '../../hooks/useOutsideClick';

interface ILocationState extends Location {
  state: {
    from: string;
    work: Work;
  };
}

function ModalWork() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataSignup>({
    resolver: yupResolver(schemaRegistrationWork),
  });

  const { createWork, updateWork, closeModal, setShowModalWork } =
    useContext(WorkContext);

  const { work_id } = useParams();

  const location = useLocation() as ILocationState;

  const modalRef = useOutsideClick(() => {
    setShowModalWork(false);
    closeModal();
  });

  const submitForm = (data: FormDataSignup) => {
    if (work_id) {
      updateWork(data, work_id);
    } else {
      createWork(data);
    }
  };

  return (
    <ModalContainer ref={modalRef}>
      <ModalInner>
        <header>
          <Title3>{work_id ? 'Editar Projeto' : 'Publicar Projeto'}</Title3>
          <Button onClick={closeModal} variant="transparent">
            X
          </Button>
        </header>
        <Form onSubmit={handleSubmit(submitForm)}>
          <LabelInputGroup
            labelName="Título"
            placehoder="Informe o titulo"
            nameField="title"
            defaultValue={location.state?.work.title || ''}
            register={register}
            errors={errors}
          />
          <LabelInputGroup
            labelName="Descrição"
            placehoder="Informe a descrição do projeto"
            nameField="description"
            defaultValue={location.state?.work.description || ''}
            register={register}
            errors={errors}
          />
          <LabelInputGroup
            labelName="Url do Projeto"
            placehoder="Informe a url do projeto"
            nameField="deploy_url"
            defaultValue={location.state?.work.deploy_url || ''}
            register={register}
            errors={errors}
          />

          <Button type="submit" width="full" variant="primary">
            {work_id ? 'Editar' : 'Publicar'}
          </Button>
        </Form>
      </ModalInner>
    </ModalContainer>
  );
}

export default ModalWork;
