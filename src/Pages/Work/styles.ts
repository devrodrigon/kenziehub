import styled from 'styled-components';

export const NoWork = styled.div`
  background-color: ${({ theme }) => theme.grey[3]};

  padding: 1.4375rem 0.8125rem;
  margin-top: 1.3125rem;
  max-width: 48.1444rem;
  margin: 1.3125rem auto;

  & > div {
    max-width: 25rem;
    margin: auto;
  }
`;
