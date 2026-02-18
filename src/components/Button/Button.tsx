import { StyledButton } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'sliderArrow';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, variant, disabled = false, onClick }: ButtonProps) => {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
