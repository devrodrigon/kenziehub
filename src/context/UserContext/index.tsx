import { AxiosError } from 'axios';
import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserInterface } from '../../data/UserInterface';
import { FormData } from '../../Pages/Login';
import { FormDataSignup } from '../../Pages/Signup';
import api from '../../Services/api';

interface ILocationState extends Location {
  state: {
    from: {
      pathname: string;
    };
  };
}

interface ILoginResponse {
  user: UserInterface;
  token: string;
}

interface IRegisterResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: Date;
  updated_at: Date;
  avatar_url: string | null;
}

interface IRegisterUserError {
  message: string;
}

interface ContextData {
  user: UserInterface | null;
  setUser: Dispatch<SetStateAction<UserInterface | null>>;
  login: (data: FormData) => void;
  signOut: () => void;
  createUser: (data: FormDataSignup) => void;
  loading: boolean;
}

export const UserContext = createContext({} as ContextData);

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const navigate = useNavigate();

  const location = useLocation() as ILocationState;

  const [user, setUser] = useState<UserInterface | null>(null);
  const [loading, setLoading] = useState(true);

  async function login(data: FormData) {
    const response = await toast.promise(
      api.post<ILoginResponse>('/sessions', data),
      {
        pending: 'Autenticando...',
        success: 'Bem vindo!',
        error: 'Email ou senha incorreta',
      }
    );

    if (response) {
      const { token, user: userResponse } = response.data;

      localStorage.setItem('@kenziehub:token', token);
      localStorage.setItem('@kenziehub:userId', userResponse.id);

      setUser(userResponse);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const toNavigate = location.state?.from?.pathname || '/dashboard';

      navigate(toNavigate, { replace: true });
    }
  }

  async function createUser(data: FormDataSignup) {
    api
      .post<IRegisterResponse>('/users', data)
      .then((response) => {
        navigate('/login', { replace: true });
        toast.success('Conta criada com sucesso!');
      })
      .catch((error: AxiosError<IRegisterUserError>) => {
        toast.error(error.response?.data.message);
      });
  }

  function signOut() {
    setUser(null);
    localStorage.clear();
    navigate('/login', { replace: true });
  }

  useEffect(() => {
    const token = localStorage.getItem('@kenziehub:token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api
        .get<UserInterface>('/profile')
        .then((response) => {
          setUser(response.data);
          const toNavigate = location.pathname.match(/^\/\w+/g);
          const go = toNavigate ? toNavigate[0] : location.pathname;
          navigate(go, { replace: true });
        })
        .catch((error) => {
          signOut();
        });
    }

    setLoading(false);
  }, []); // eslint-disable-line

  return (
    <UserContext.Provider
      value={{ user, setUser, login, signOut, loading, createUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
