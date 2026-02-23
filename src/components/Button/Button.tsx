import { StyledButton } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'sliderArrow' | 'priceCard' | 'fullWidth';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ children, variant = 'primary', disabled = false, onClick }: ButtonProps) => {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
