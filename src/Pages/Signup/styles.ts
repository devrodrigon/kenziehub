import { Container } from '../Login/styles';
import styled from 'styled-components';
import { Select } from '@mui/material';

export const ContainerSignup = styled(Container)`
  justify-content: start;
  padding: 0 0.75rem 3rem;
  margin-top: 3rem;

  max-width: 23.0625rem;

  height: fit-content;

  & > div {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }
`;

export const StyledSelect = styled(Select)`
  background-color: ${({ theme }) => theme.grey[2]};

  .MuiSelect-icon {
    color: ${({ theme }) => theme.grey[1]};
  }
  div {
    color: ${({ theme }) => theme.grey[0]};
    font-size: 0.8117rem;
    box-sizing: border-box;
  }

  @media screen and (min-width: 1024px) {
    div {
      font-size: 1.0152rem;
    }
  }
`;
