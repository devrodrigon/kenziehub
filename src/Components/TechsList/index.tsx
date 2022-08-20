import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Headline, TechName } from '../../styles/typography';

import { BsTrash } from 'react-icons/bs';
import { Container } from './styles';
import { TechContext } from '../../context/TechContext';
import { useNavigate } from 'react-router-dom';

function TechList() {
  const { user } = useContext(UserContext);
  const { setShowModal } = useContext(TechContext);
  const navigate = useNavigate();

  return (
    <Container>
      <ul>
        {user?.techs.map(({ id, title, status }) => (
          <li
            onClick={() => {
              navigate(`/dashboard/editTech/${id}`, {
                state: { title, status },
              });
              setShowModal(true);
            }}
            key={id}
          >
            <TechName>{title}</TechName>
            <div>
              <Headline>{status}</Headline>
              <button>
                <BsTrash color="#FFFFFF" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default TechList;
