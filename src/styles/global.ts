import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.grey[4]};
        font-family: 'Inter', sans-serif;
        /* padding: 0.75rem; */


        --toastify-text-color-dark: ${({ theme }) => theme.grey[0]};
        --toastify-color-dark: ${({ theme }) => theme.grey[2]};

        --toastify-icon-color-error: ${({ theme }) => theme.feedback.negative};
        --toastify-color-progress-error: ${({ theme }) =>
          theme.feedback.negative};
        
        --toastify-icon-color-success: ${({ theme }) => theme.feedback.success};
        --toastify-color-progress-success: ${({ theme }) =>
          theme.feedback.success};
        


    }


`;
