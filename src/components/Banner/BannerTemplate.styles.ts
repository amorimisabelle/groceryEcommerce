import styled, { css } from 'styled-components';
import bannerBackground from '../../assets/images/vegs-pattern.png';

interface IBannerProps {
  variant: 'primary' | 'secondary' | 'terciary';
}

const BannerTemplateStyle = styled.div<IBannerProps>`
  display: flex;
  justify-content: space-between;
  background-size: contain;
  min-width: 50%;

  .firstColumn {
    padding: 2rem 3rem;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-bottom: 3rem;
  }

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          background:
            url(${bannerBackground}) center repeat,
            #fff5e1;
          background-size: cover;
        `;
      case 'secondary':
        return css`
          background:
            url(${bannerBackground}) center repeat,
            #d2efe1;
          background-size: cover;
        `;
      case 'terciary':
        return css`
          align-items: center;
          justify-content: space-between;
          min-width: 5%;
          max-width: 20%;
          background:
            url(${bannerBackground}) center repeat,
            #fff5e1;
          background-size: cover;

          .singleColumn {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            max-width: 100%;
          }

          article {
            padding-bottom: 0;
          }
        `;
    }
  }}
`;

export default BannerTemplateStyle;
