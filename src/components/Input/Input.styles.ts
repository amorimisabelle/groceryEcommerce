import styled from 'styled-components';

const InputStyled = styled.div`
  width: 100%;
  padding: 12px 0 12px 12px;
  border: 1px solid #ccc;
  background: var() (--white);
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--gray-100);
  max-height: 48px;

  input {
    padding: 0;
    border: none;
    font-size: var(--font-size-sm);
  }
`;

export default InputStyled;
