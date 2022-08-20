import { useContext, useState } from 'react';
import Lottie from 'react-lottie';
import { ToastContainer } from 'react-toastify';
import Header from '../../Components/Header';
import ModalDelete from '../../Components/ModalDelete';
import Navbar from '../../Components/Navbar';
import WorksList from '../../Components/WorksList';
import { UserContext } from '../../context/UserContext';
import { WorkContext } from '../../context/WorkContext';
import { Title1 } from '../../styles/typography';
import { NoWork } from './styles';

import animationData from '../../assets/empty.json';

function Work() {
  const { showModalDelete } = useContext(WorkContext);
  const { user } = useContext(UserContext);

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
    <div>
      <Navbar />
      <Header />

      {user?.works.length ? (
        <WorksList />
      ) : (
        <NoWork>
          <Title1>Nenhum projeto publicado</Title1>
          <div>
            <Lottie
              options={defaultOptions}
              isStopped={animation.isStopped}
              isPaused={animation.isPaused}
            />
          </div>
        </NoWork>
      )}
      {showModalDelete && <ModalDelete />}
      <ToastContainer
        position="top-right"
        autoClose={700}
        theme="dark"
        pauseOnHover={false}
      />
    </div>
  );
}

export default Work;
