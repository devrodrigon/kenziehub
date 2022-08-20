import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 0 0.8125rem;
  height: 4.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.grey[3]};

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;

    max-width: 48.1444rem;
    margin: 0 auto;
  }
`;

export const StyledFigure = styled.figure`
  position: relative;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;

    cursor: pointer;
  }

  div {
    position: absolute;
    right: 0;
    display: none;
    width: 200px;
  }

  &:hover div {
    background-color: #fff;
    display: block;
  }
`;
