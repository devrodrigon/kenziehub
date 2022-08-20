import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { HeadlineBold, Title1 } from '../../styles/typography';
import { Container } from './styles';

function Header() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <div>
        <Title1>Olá, {user?.name}</Title1>
        <HeadlineBold>{user?.course_module}</HeadlineBold>
      </div>
    </Container>
  );
}

export default Header;
