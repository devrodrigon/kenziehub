import styled from 'styled-components';
import { ModalInner } from '../Modal/styles';

export const ModalContent = styled(ModalInner)`
  padding: 1.25rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.0994rem;
`;
