import { StyledHeader } from './Header.styles';

interface HeaderProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Header = ({ children, variant = 'primary' }: HeaderProps) => {
  return (
    <StyledHeader variant={variant}>
      <img src="" alt="" />
      {children}
    </StyledHeader>
  );
};

export default Header;
