import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { UserContext } from '../../context/UserContext';
import { WorkContext } from '../../context/WorkContext';

import { Button } from '../../styles/buttons';
import ModalWork from '../ModalWork';
import { HeaderContainer, StyledFigure } from './styles';

function Navbar() {
  const { signOut } = useContext(UserContext);
  const { showModalWork, setShowModalWork } = useContext(WorkContext);

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <nav>
        <Link to="/dashboard">
          <img src={logo} alt="logo kenzie" />
        </Link>
        <StyledFigure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyz-77X11MoGE22xVjjPhbpW6lPj6I0SkcTQ&usqp=CAU"
            alt=""
          />
          <div>
            <Button onClick={signOut} variant="menu">
              Sair
            </Button>
            <Button variant="menu" onClick={() => setShowModalWork(true)}>
              Compartilhar Projeto
            </Button>
            <Button variant="menu" onClick={() => navigate('/work')}>
              Projetos
            </Button>
            <Button variant="menu" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
          </div>
        </StyledFigure>
      </nav>

      {showModalWork && <ModalWork />}
    </HeaderContainer>
  );
}

export default Navbar;
