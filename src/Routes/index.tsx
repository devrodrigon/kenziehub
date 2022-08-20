import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ProtectedRoutes from './ProtectedRoutes';
import Modal from '../Components/Modal';
import Work from '../Pages/Work';
import ModalWork from '../Components/ModalWork';
import ModalDelete from '../Components/ModalDelete';

function RoutesMain() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="editTech/:tech_id" element={<Modal />} />
          </Route>
          <Route path="/work" element={<Work />}>
            <Route path="editWork/:work_id" element={<ModalWork />} />
            <Route path="deleteWork/:work_id" element={<ModalDelete />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default RoutesMain;
