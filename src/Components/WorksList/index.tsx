import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';

import { UserContext } from '../../context/UserContext';
import { WorkContext } from '../../context/WorkContext';
import { Button } from '../../styles/buttons';
import { Container, GridContainer } from './styles';

import { WorkTitle } from '../../styles/typography';

import animationData from '../../assets/84832-tech.json';

function WorksList() {
  const { user } = useContext(UserContext);
  const { setShowModalWork, setShowModalDelete } = useContext(WorkContext);

  const navigate = useNavigate();

  const location = useLocation();

  const [animation] = useState({ isStopped: false, isPaused: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <ul>
        {user?.works.map((work) => (
          <li key={work.id}>
            <a href={work.deploy_url} target="_blank" rel="noreferrer">
              <WorkTitle>{work.title}</WorkTitle>
              <Lottie
                options={defaultOptions}
                isStopped={animation.isStopped}
                isPaused={animation.isPaused}
              />
            </a>
            <GridContainer>
              <Button
                onClick={() => {
                  navigate(`editWork/${work.id}`, {
                    state: { work, from: location.pathname },
                  });
                  setShowModalWork(true);
                }}
                variant="primary"
              >
                Editar
              </Button>
              <Button
                variant="grey1"
                onClick={() => {
                  navigate(`deleteWork/${work.id}`);
                  setShowModalDelete(true);
                }}
              >
                Deletar
              </Button>
            </GridContainer>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default WorksList;
