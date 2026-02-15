import styled from 'styled-components';

export const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ variant }) =>
    variant === 'primary' &&
    `
      background: var(--primary-color);
      color: white;
      &:hover {
        background: var(--primary-hover);
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
      background: transparent;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
      &:hover {
        background: var(--primary-hover);
      }
    `}
`;
