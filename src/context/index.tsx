import { ReactNode } from 'react';
import UserProvider from './UserContext';
import TechProvider from './TechContext';
import WorkProvider from './WorkContext';

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <UserProvider>
      <TechProvider>
        <WorkProvider>{children}</WorkProvider>
      </TechProvider>
    </UserProvider>
  );
}

export default Providers;
