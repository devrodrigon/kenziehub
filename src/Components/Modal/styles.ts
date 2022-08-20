import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  padding: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 2;
`;

export const ModalInner = styled.div`
  background-color: ${({ theme }) => theme.grey[3]};
  width: 100%;

  max-width: 23.0625rem;

  header {
    background-color: ${({ theme }) => theme.grey[2]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5625rem 1rem;
  }
`;

export const Form = styled.form`
  padding: 1.5rem 1.375rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.625rem;

  & > .divSelect {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    box-sizing: border-box;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.0994rem;
`;
