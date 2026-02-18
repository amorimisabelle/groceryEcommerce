import styled, { css } from 'styled-components';
import bannerBackground from '../../assets/images/vegs-pattern.png';

interface IBannerProps {
  variant: 'primary' | 'secondary';
}

const BannerTemplateStyle = styled.div<IBannerProps>`
  display: flex;
  justify-content: space-between;
  background-size: contain;

  div {
    padding: 2rem 3rem;
  }

  article {
    width: 80%;
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
    }
  }}
`;

export default BannerTemplateStyle;
