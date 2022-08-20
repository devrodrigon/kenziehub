import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Work } from '../../data/UserInterface';
import { FormDataSignup } from '../../Pages/Signup';
import api from '../../Services/api';
import { UserContext } from '../UserContext';

interface ICreateWorkResponse {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  user: {
    id: string;
  };
  created_at: Date;
  updated_at: Date;
}

interface IUpdateWorkResponse {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}

interface ILocationState extends Location {
  state: {
    from: string;
    work: Work;
  };
}

interface WorkContextData {
  showModalWork: boolean;
  setShowModalWork: Dispatch<SetStateAction<boolean>>;
  createWork: (data: FormDataSignup) => void;
  updateWork: (data: FormDataSignup, work_id: string) => void;
  deleteWork: (work_id?: string) => void;
  closeModal: () => void;
  showModalDelete: boolean;
  setShowModalDelete: Dispatch<SetStateAction<boolean>>;
}

export const WorkContext = createContext({} as WorkContextData);

interface IWorkProviderProps {
  children: ReactNode;
}

function WorkProvider({ children }: IWorkProviderProps) {
  const [showModalWork, setShowModalWork] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const { setUser } = useContext(UserContext);

  const location = useLocation() as ILocationState;
  const navigate = useNavigate();

  const closeModal = () => {
    const toNavigate = location.state?.from || location.pathname;

    navigate(toNavigate, { replace: true });
    setShowModalWork(false);
  };

  function createWork(data: FormDataSignup) {
    console.log(data);
    api.post<ICreateWorkResponse>('/users/works', data).then((response) => {
      setUser((prevValue) => {
        if (prevValue) {
          return {
            ...prevValue,
            works: [...prevValue.works, response.data],
          };
        }

        return prevValue;
      });
      toast.success('Trabalho cadastrado com sucesso!!');
      closeModal();
    });
  }

  function updateWork(data: FormDataSignup, work_id: string) {
    api
      .put<IUpdateWorkResponse>(`/users/works/${work_id}`, data)
      .then((response) => {
        setUser((prevValue) => {
          if (prevValue) {
            const index = prevValue.works.findIndex(
              (work) => work.id === work_id
            );

            prevValue.works[index] = response.data;

            return {
              ...prevValue,
            };
          }

          return prevValue;
        });
        toast.success('Atualizado com sucesso!!');
        closeModal();
      })
      .catch((error) => console.log(error));
  }

  function deleteWork(work_id?: string) {
    api.delete(`/users/works/${work_id}`).then((response) => {
      setUser((prevValue) => {
        if (prevValue) {
          const newWorks = prevValue.works.filter(
            (work) => work.id !== work_id
          );
          return {
            ...prevValue,
            works: [...newWorks],
          };
        }

        return prevValue;
      });
      toast.success('Deletado com sucesso!!');
      navigate('/work', { replace: true });
      setShowModalDelete(false);
    });
  }

  return (
    <WorkContext.Provider
      value={{
        showModalWork,
        setShowModalWork,
        createWork,
        updateWork,
        deleteWork,
        closeModal,
        showModalDelete,
        setShowModalDelete,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
}

export default WorkProvider;
