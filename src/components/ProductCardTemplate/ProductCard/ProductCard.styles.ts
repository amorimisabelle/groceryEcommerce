import styled, { css } from 'styled-components';

interface ProductCardTemplateProps {
  type?: 'categories' | 'price' | 'price&stock';
  index?: number;
}

const categoriesStyles = css`
  text-align: center;
  h3 {
    font-size: 1.15rem;
  }

  p {
    font-size: 0.85rem;
    color: var(--gray);
  }
`;

const priceStyles = css``;

const priceStockStyles = css``;

const mediumStyles = css``;

export const ProductCardTemplate = styled.div<ProductCardTemplateProps>`
  padding: 1rem 1.5rem;
  border-radius: 3px;
  width: 100%;
  color: var(--gray);
  text-align: left;
  border: 1px solid rgba(173, 173, 173, 0.25);

  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 4px;
    color: var(--black);
  }

  h4 {
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 4px;
  }

  img {
    width: 100%;
    max-height: 50%;
    object-fit: contain;
  }

  .brand {
    font-size: 0.75rem;
  }

  .price p:first-child {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 1.15rem;
  }

  .price p:last-child {
    font-size: 0.9rem;
  }

  ${(props) => {
    const index = props.index || 0;
    const colorIndex = index % 6; // Cicla entre 0-5

    // Combinações específicas para cards large size
    // if (props.index === 0 && props.type === 'price') {
    //   return css`
    //     background-color: var(--bg-card-color-largeSize-1);
    //     transform: scale(1.05);
    //   `;
    // }

    // if (props.index === 1 && props.type === 'price') {
    //   return css`
    //     background-color: var(--bg-card-color-largeSize-2);
    //     transform: scale(1.05);
    //   `;
    // }

    // Para size small: usa cores largeSize também
    if (props.type === 'categories') {
      return css`
        ${categoriesStyles}
        background-color: var(--bg-card-color-${colorIndex});
        transform: scale(1.05);
        border: none;
      `;
    }

    if (props.type === 'price') {
      return css`
        ${priceStyles}
        background-color: transparent;
      `;
    }

    if (props.type === 'price&stock') {
      return css`
        ${priceStockStyles}
        background-color: transparent;
      `;
    }

    // Para size medium ou default: usa cores normais
    return css`
      ${mediumStyles}
      background-color: var(--bg-card-color-${colorIndex});
    `;
  }}
`;
