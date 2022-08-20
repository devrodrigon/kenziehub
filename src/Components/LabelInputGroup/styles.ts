import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const InputField = styled(TextField)`
  width: 100%;
  /* & .MuiOutlinedInput-notchedOutline {
    border-color: white;
  } */

  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }

  input {
    color: white;
    background-color: ${({ theme }) => theme.grey[2]};
    padding-left: 0.8125rem;
    border-radius: 4px;
    box-sizing: border-box;
    height: 48px;

    font-size: 0.8119rem;
  }

  @media screen and (min-width: 1024px) {
    input {
      font-size: 1.015rem;
    }
  }
`;
