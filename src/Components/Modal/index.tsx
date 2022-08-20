import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LabelInputGroup from '../LabelInputGroup';

import { FormDataSignup } from '../../Pages/Signup';

import { Button } from '../../styles/buttons';
import { Form, GridContainer, ModalContainer, ModalInner } from './styles';
import { StyledSelect } from '../../Pages/Signup/styles';
import { Label, Title3 } from '../../styles/typography';
import { FormHelperText, MenuItem } from '@mui/material';
import { schemaRegistrationTech } from '../../validators/registrationTech';

import { UserContext } from '../../context/UserContext';
import { TechContext } from '../../context/TechContext';
import {
  Location,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import api from '../../Services/api';
import { toast } from 'react-toastify';
import { useOutsideClick } from '../../hooks/useOutsideClick';

interface ILocationState extends Location {
  state: {
    title?: string;
    status?: string;
  };
}

function Modal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataSignup>({
    resolver: yupResolver(schemaRegistrationTech),
  });

  const { setUser } = useContext(UserContext);
  const { createTech, setShowModal, deleteTech } = useContext(TechContext);

  const navigate = useNavigate();

  const { tech_id } = useParams();

  const location = useLocation() as ILocationState;

  const modalRef = useOutsideClick(() => {
    closeModal();
  });

  const onSubmitForm = (data: FormDataSignup) => {
    if (tech_id) {
      updateForm(data);
    } else {
      createTech(data);
    }
  };

  const updateForm = (data: FormDataSignup) => {
    api
      .put(`/users/techs/${tech_id}`, data)
      .then((resp) => {
        setUser((prevValue) => {
          if (prevValue) {
            const filteredTech = prevValue.techs.filter(
              ({ id }) => id !== tech_id
            );
            return {
              ...prevValue,
              techs: [...filteredTech, resp.data],
            };
          }
          return prevValue;
        });
        navigate('/dashboard');
        toast.success('Tech atualizada com sucesso');
        setShowModal(false);
      })
      .catch((error) => {
        toast.error('ops!!');
      });
  };

  const closeModal = () => {
    navigate('/dashboard', { replace: true });
    setShowModal(false);
  };

  return (
    <ModalContainer ref={modalRef}>
      <ModalInner>
        <header>
          <Title3>
            {tech_id ? 'Tecnologia Detalhes' : 'Cadastrar Tecnologia'}
          </Title3>
          <Button onClick={closeModal} variant="transparent">
            X
          </Button>
        </header>
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <LabelInputGroup
            labelName="Nome"
            placehoder="Informe a tecnologia"
            defaultValue={location.state?.title ?? ''}
            nameField="title"
            register={register}
            errors={errors}
          />
          <div className="divSelect">
            <Label>Selecionar Status</Label>

            <StyledSelect
              error={!!errors.status}
              defaultValue={location.state?.status ?? ''}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              {...register('status')}
            >
              <MenuItem value="">
                <em>Selecionar Status</em>
              </MenuItem>
              <MenuItem value="Iniciante">Iniciante</MenuItem>
              <MenuItem value="Intermediário">Intermediário</MenuItem>
              <MenuItem value="Avançado">Avançado</MenuItem>
            </StyledSelect>
            {errors.status && (
              <FormHelperText sx={{ mt: -1, ml: 2 }} error>
                {errors.status.message}
              </FormHelperText>
            )}
          </div>
          {!tech_id ? (
            <Button type="submit" width="full" variant="primary">
              Cadastrar Tecnologia
            </Button>
          ) : (
            <GridContainer>
              <Button type="submit" variant="primaryNegative">
                Salvar Alteração
              </Button>
              <Button
                onClick={() => deleteTech(tech_id)}
                type="button"
                variant="grey1"
              >
                Excluir
              </Button>
            </GridContainer>
          )}
        </Form>
      </ModalInner>
    </ModalContainer>
  );
}

export default Modal;
