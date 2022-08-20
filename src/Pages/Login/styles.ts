import styled from 'styled-components';
import { TextField, OutlinedInput } from '@mui/material';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.2119rem;

  /* max-width: 23.0625rem; */
  height: 100vh;
  padding: 0.75rem;

  img {
    width: 6.3125rem;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 9.0038rem;
    }
  }
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.grey[3]};
  box-shadow: 0px 0.2005rem 2.0054rem -0.5014rem rgba(0, 0, 0, 0.25);
  border-radius: 0.2005rem;

  max-width: 23.0625rem;

  display: flex;
  flex-direction: column;
  gap: 1.12rem;

  padding: 2.1056rem 1.1031rem;

  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.12rem;
  }
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
  }
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  /* & .Muioutlinedinput-notchedoutline {
    border-color: blue;
  }

  & .Mui-focused .Muioutlinedinput-notchedoutline {
    border-color: red;
  } */

  /* & .Mui-focused {
    border-color: white;
  } */
  background-color: ${({ theme }) => theme.grey[2]};

  input {
    color: white;
    border-radius: 4px;
    padding-left: 0.8125rem;
  }
`;
