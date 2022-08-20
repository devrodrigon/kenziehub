import { useContext } from 'react';
import { TechContext } from '../../context/TechContext';
import { Button } from '../../styles/buttons';
import { Title3 } from '../../styles/typography';
import Modal from '../Modal';
import TechList from '../TechsList';
import { MainContainer } from './styles';

function MainContent() {
  const { setShowModal, showModal } = useContext(TechContext);

  return (
    <MainContainer>
      <div className="div">
        <Title3>Tecnologias</Title3>
        <Button onClick={() => setShowModal(true)} variant="backButton">
          +
        </Button>
      </div>
      <TechList />
      {showModal && <Modal />}
    </MainContainer>
  );
}

export default MainContent;
