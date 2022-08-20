import styled from 'styled-components';

export const Title1 = styled.h1`
  color: ${({ theme }) => theme.grey[0]};
  font-size: 0.9024rem;
  font-weight: 700;

  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.grey[0]};
  font-size: 0.6108rem;
  font-weight: 400;

  @media screen and (min-width: 1024px) {
    font-size: 0.7614rem;
  }
`;

export const Headline = styled.span`
  color: ${({ theme }) => theme.grey[1]};
  font-weight: 400;
  font-size: 0.5994rem;

  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 0.75rem;
  }
`;

export const HeadlineBold = styled.label`
  color: ${({ theme }) => theme.grey[1]};
  font-weight: 600;
  font-size: 0.6016rem;

  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 0.75rem;
  }
`;

export const Title3 = styled.h3`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.grey[0]};

  @media screen and (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const TechName = styled.h3`
  font-size: 0.8881rem;
  font-weight: 700;
  color: ${({ theme }) => theme.grey[0]};
`;

export const WorkTitle = styled(Title3)`
  text-align: center;
  font-weight: 600;
`;
