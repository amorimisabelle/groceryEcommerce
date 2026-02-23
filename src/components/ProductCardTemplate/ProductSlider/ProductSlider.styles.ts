import styled from 'styled-components';

interface IProductSliderProps {
  type: 'categories' | 'price' | 'price&stock';
}

export const ProductSliderContainer = styled.div<IProductSliderProps>`
  .product-slider-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    min-height: 200px;
    max-width: 100%;
  }

  ${(props) =>
    props.type === 'categories' &&
    `
  width: 100%;
  .product-slider-container {
    gap: 1rem;;
  }

    .product-slider-container h3 {
      margin: 0 auto;
    }
  `}

  ${(props) =>
    props.type === 'price' &&
    `
    width: 90%;
    margin: 0 auto;
  `}

  ${(props) =>
    props.type === 'price&stock' &&
    `
    min-width: 70%;
    
    .product-slider-container {
      min-width: 100%;
    }
  `}
`;
