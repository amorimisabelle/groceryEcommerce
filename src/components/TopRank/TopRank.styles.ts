import styled from 'styled-components';

const TopRankStyled = styled.div`
  padding: 2rem 0;
  width: 50%;

  .header {
    margin-bottom: 1.5rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--black);
      margin-bottom: 0.5rem;
    }
  }

  .row {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--gray-100);

    img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border-radius: 8px;
      background: var(--gray-100);
    }

    .rowBody {
      h4 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--black);
        text-align: left;
      }

      .brand {
        font-size: 0.875rem;
        color: var(--gray);
      }

      .price {
        p:first-child {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1.1rem;
        }

        p:last-child {
          color: var(--gray);
          text-decoration: line-through;
          font-size: 0.9rem;
        }
      }
    }

    &:last-child {
      border-bottom: none;
    }
  }

  @media (min-width: 1080px) {
    width: 25% !important;
  }
`;

export default TopRankStyled;
