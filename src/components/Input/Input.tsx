import { DynamicIcon } from 'lucide-react/dynamic';
import InputStyled from './Input.styles';
import React from 'react';
import Button from '../Button/Button';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  errorMessage?: string;
  placeholder: string;
  buttonText?: string;
  required: boolean;
  showErrorMessage?: boolean;
  maxLength?: number;
  icon?: 'send' | 'key' | 'mail';
}

const Input = ({
  labelText,
  placeholder,
  errorMessage,
  buttonText,
  showErrorMessage = false,
  icon,
  maxLength,
}: IInputProps) => {
  return (
    <>
      {labelText && <label htmlFor="">{labelText}</label>}
      <InputStyled>
        <div className="flex gap-2 items-center">
          {icon && <DynamicIcon name={icon} size={18} />}
          <input placeholder={placeholder} maxLength={maxLength} />
        </div>
        {buttonText && <Button>{buttonText}</Button>}
      </InputStyled>
      {showErrorMessage && <small>{errorMessage}</small>}
    </>
  );
};

export default Input;
