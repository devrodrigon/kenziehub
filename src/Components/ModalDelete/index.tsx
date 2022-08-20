import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { WorkContext } from '../../context/WorkContext';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Button } from '../../styles/buttons';
import { WorkTitle } from '../../styles/typography';
import { ModalContainer } from '../Modal/styles';
import { GridContainer, ModalContent } from './styles';

function ModalDelete() {
  const { deleteWork, setShowModalDelete } = useContext(WorkContext);

  const navigate = useNavigate();

  const { work_id } = useParams();

  const modalRef = useOutsideClick(() => {
    setShowModalDelete(false);
    navigate('/work');
  });

  return (
    <ModalContainer ref={modalRef}>
      <ModalContent>
        <WorkTitle>Tem certeza que deseja excluir esta publicação?</WorkTitle>
        <GridContainer>
          <Button variant="primary" onClick={() => deleteWork(work_id)}>
            Excluir
          </Button>
          <Button
            variant="grey1"
            onClick={() => {
              setShowModalDelete(false);
              navigate('/work');
            }}
          >
            Cancelar
          </Button>
        </GridContainer>
      </ModalContent>
    </ModalContainer>
  );
}

export default ModalDelete;
