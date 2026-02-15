import styled from 'styled-components';

export const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;

  ${({ variant }) =>
    variant === 'primary' &&
    `
      background: var(--primary-color);
      color: white;
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
      background: transparent;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
    `}
`;
