import styled from 'styled-components';

interface IProductCardTemplate {
  variant: 'primary' | 'secondary' | 'terciary';
}

export const ProductCategorisTemplate = styled.section<IProductCardTemplate>`
  padding: 6rem 0 0;

  .templateHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 2rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  a {
    color: var(--black);
  }

  ${(props) =>
    props.variant === 'secondary' &&
    `
    .templateHeader {
      display: flex;
      justify-content: left;
      gap: 2rem;
      align-items: center;
      width: 90%;
      margin: 0 auto;
      padding-bottom: 2rem;
    }
  `}
`;
