import styled from 'styled-components';

export const StyledHeader = styled.header`
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 24px;
    min-width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    border-bottom: 1px solid rgba(173, 173, 173, 0.3);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: #f3f3f3;
  font-size: var(--font-size-sm) !important;
  border-radius: var(--border-radius-md);

  select {
    border: none;
    background: transparent;
    font-size: inherit;
  }

  input {
    border: none;
    background: transparent;
    font-size: inherit;
    flex: 1;
  }

  .divider {
    width: 1px;
    height: 16px;
    background: var(--gray);
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  font-size: var(--font-size-md) !important;

  li {
    display: flex;
    gap: var(--spacing-sm);
    align-items: center;
  }
`;
