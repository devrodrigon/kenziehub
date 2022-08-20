import { motion } from 'framer-motion';

import Header from '../../Components/Header';
import MainContent from '../../Components/MainContent';
import Navbar from '../../Components/Navbar';

import { ToastContainer } from 'react-toastify';

function Dashboard() {
  // useEffect(() => {
  //   const token = localStorage.getItem('@kenziehub:token');

  //   if (token && !user) {
  //     const userId = localStorage.getItem('@kenziehub:userId');

  //     api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  //     api.get(`/users/${userId}`).then((response) => {
  //       setUser(response.data);
  //     });
  //   }

  //   if (!token) {
  //     navigate('/login', { replace: true });
  //   }
  // }, []); // eslint-disable-line

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />
      <Header />
      <MainContent />
      <ToastContainer
        position="top-right"
        autoClose={700}
        theme="dark"
        pauseOnHover={false}
      />
    </motion.div>
  );
}

export default Dashboard;
