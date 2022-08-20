import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?:
    | 'primary'
    | 'primaryNegative'
    | 'grey1'
    | 'backButton'
    | 'transparent'
    | 'menu';

  width?: 'full';
}

export const Button = styled.button<ButtonProps>`
  font-size: 0.8022rem;
  font-weight: 500;
  color: ${({ theme }) => theme.grey[0]};

  padding: 0.5156rem;
  /* height: 2.4063rem; */

  border: none;
  border-radius: 0.25rem;

  ${({ width }) => {
    switch (width) {
      case 'full':
        return css`
          width: 100%;
        `;
    }
  }}

  cursor: pointer;

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.colors.primary};
          &:hover {
            background-color: ${({ theme }) => theme.colors.primaryFocus};
          }
        `;
      case 'primaryNegative':
        return css`
          background-color: ${({ theme }) => theme.colors.primaryNegative};
          &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
          }
        `;

      case 'grey1':
        return css`
          background-color: ${({ theme }) => theme.grey[1]};
          &:hover {
            background-color: ${({ theme }) => theme.grey[2]};
          }
        `;

      case 'backButton':
        return css`
          background-color: ${({ theme }) => theme.grey[3]};
          &:hover {
            background-color: ${({ theme }) => theme.grey[2]};
          }
        `;

      case 'transparent':
        return css`
          background-color: transparent;
        `;

      case 'menu':
        return css`
          width: 100%;
          border-radius: 0;
          background-color: ${({ theme }) => theme.grey[3]};
          border: 1px solid ${({ theme }) => theme.grey[1]};
          &:hover {
            background-color: ${({ theme }) => theme.grey[2]};
          }
        `;

      default:
        return false;
    }
  }}
`;
