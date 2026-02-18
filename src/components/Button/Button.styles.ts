import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'sliderArrow';
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
          border-radius: 50px;
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
      case false:
        return css`
          background: var(--gray-50);
          border: none;
          color: var(--primary-color);
          border-radius: 50px;
          &:hover {
            background: var(--gray-100);
          }
        `;
    }
  }}
`;
