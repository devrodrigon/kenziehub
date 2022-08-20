import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 0 0.8125rem;

  height: 7.375rem;

  border-bottom: 1px solid ${({ theme }) => theme.grey[3]};

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.625rem;

    max-width: 48.1444rem;

    margin: auto;
    width: 100%;
  }
`;
