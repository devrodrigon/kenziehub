import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.grey[3]};
  padding: 1.4375rem 0.5313rem;
  margin-top: 1.3125rem;
  border-radius: 0.25rem;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    li {
      display: flex;
      justify-content: space-between;

      background-color: ${({ theme }) => theme.grey[4]};
      border-radius: 0.25rem;

      padding: 13px 22px;

      &:hover {
        background-color: ${({ theme }) => theme.grey[2]};
        cursor: pointer;
      }

      div {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5625rem;

        button {
          background-color: transparent;
          border: none;
          align-self: flex-end;

          cursor: pointer;
        }
      }
    }
  }
`;
