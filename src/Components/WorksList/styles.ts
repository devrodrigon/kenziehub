import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.4375rem 0.8125rem;
  margin-top: 1.3125rem;
  max-width: 48.1444rem;
  margin: 1.3125rem auto;

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.9375rem;

    li {
      background-color: ${({ theme }) => theme.grey[3]};
      padding: 0.625rem;
      max-width: 13.75rem;
      /* box-sizing: border-box; */

      height: fit-content;

      a {
        text-decoration: none;
      }
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.0994rem;
`;
