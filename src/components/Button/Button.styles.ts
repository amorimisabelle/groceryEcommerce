import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'sliderArrow' | 'priceCard' | 'fullWidth';
  disabled: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 12px 24px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: fit-content;

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          background: var(--primary-color);
          color: white;
          &:hover {
            background: var(--primary-hover);
          }
        `;
      case 'secondary':
        return css`
          background: var(--gray-50);
          border: none;
          color: var(--primary-color);
          padding: 8px 16px;
          border-radius: 4px;
          &:hover {
            background: var(--gray-100);
          }
        `;
      case 'sliderArrow':
        return css`
          max-height: fit-content;
          padding: 1rem 1.2rem;
          color: var(--black);
          background: var(--gray-50);
          border: none;
          border-radius: 50px;
          &:hover {
            background: var(--gray-100);
          }
        `;
      case 'priceCard':
        return css`
          padding: 0.5rem;
          background: var(--primary-light);
          color: var(--primary-color);
          &:hover {
            background: var(--primary-hover);
          }
          font-size: 0.88rem;
        `;
      case 'fullWidth':
        return css`
          padding: 0.5rem 24px;
          justify-content: center;
          background: var(--primary-color);
          color: white;
          &:hover {
            background: var(--primary-hover);
          }
          min-width: 100%;
          font-size: 0.88rem;
        `;
    }

    switch (props.disabled) {
      case true:
        return css`
          background: var(--primary-color);
          color: white;
          &:hover {
            background: var(--primary-hover);
          }
        `;
    }
  }}
`;
