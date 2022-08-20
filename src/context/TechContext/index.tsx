import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormDataSignup } from '../../Pages/Signup';
import api from '../../Services/api';
import { UserContext } from '../UserContext';

interface TechContextData {
  createTech: (data: FormDataSignup) => void;

  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;

  deleteTech: (tech_id: string) => void;
}

interface ICreateTechResponse {
  id: string;
  title: string;
  status: string;
  user: {
    id: string;
  };
  created_at: string;
  updated_at: string;
}

export const TechContext = createContext({} as TechContextData);

interface TechProviderProps {
  children: ReactNode;
}

function TechProvider({ children }: TechProviderProps) {
  const [showModal, setShowModal] = useState(false);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function createTech(data: FormDataSignup) {
    const resp = await toast.promise(
      api.post<ICreateTechResponse>('/users/techs', data),
      {
        pending: 'Criando Tech...',
        success: 'Tech cadastrada com sucesso!',
        error: 'Tech já cadastrada',
      }
    );

    if (resp) {
      setUser((prevValue) => {
        if (prevValue) {
          return {
            ...prevValue,
            techs: [...prevValue.techs, resp.data],
          };
        }
        return prevValue;
      });
      setShowModal(false);
    }
  }

  async function deleteTech(tech_id: string) {
    const resp = await toast.promise(api.delete(`/users/techs/${tech_id}`), {
      pending: 'Deletando Tech...',
      success: 'Tech deletada com sucesso!',
      error: 'Error ao remover Tech',
    });

    if (resp) {
      setUser((prevValue) => {
        if (prevValue) {
          const newTechs = prevValue?.techs.filter(
            (tech) => tech.id !== tech_id
          );
          return {
            ...prevValue,
            techs: [...newTechs],
          };
        }
        return prevValue;
      });

      setShowModal(false);
      navigate('/dashboard');
    }
  }

  return (
    <TechContext.Provider
      value={{
        createTech,
        showModal,
        setShowModal,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}

export default TechProvider;
