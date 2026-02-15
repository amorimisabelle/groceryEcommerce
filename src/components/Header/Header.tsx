import { StyledHeader, SearchContainer, MenuContainer } from './Header.styles';
import logo from '../../assets/images/groceryLogo.svg';
import profilePicture from '../../assets/images/profilePictue.png';
import {
  Heart,
  ShoppingCart,
  ChevronDown,
  Search,
  LayoutGrid,
  House,
  Percent,
  Megaphone,
  Flame,
  Phone,
} from 'lucide-react';
import Button from '../Button/Button';

const Header = () => {
  const selectOptions = [
    'Vegetables',
    'Fruits',
    'Grains',
    'Proteins',
    'Dairy',
    'Cooffe & Teas',
    'Meat',
    'Beverages',
  ];

  return (
    <StyledHeader>
      <div className="header-row">
        <img src={logo} alt="Logo groceryish" />
        <SearchContainer>
          <select>
            <option value="">All categories</option>
            {selectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div className="divider"></div>
          <input type="text" placeholder="Search for items..." />
          <Button variant="primary">
            <Search width={24} />
          </Button>
        </SearchContainer>
        <div className="flex items-center gap-14 text-(--font-size-xs)!">
          <div className="flex items-center gap-2">
            <Heart width={24} />
            <p>Wishlist</p>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart width={24} />
            <div>
              <p>My cart</p>
              {/* TO DO: Tornar valor dinamico após implementar carrinho */}
              <p>$21</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-(--font-size-xs)!">
          <img src={profilePicture} alt="" />
          <div className="flex items-center">
            <p className="">Nome do usuário</p>
            <ChevronDown width={24} />
          </div>
        </div>
      </div>
      <div className="header-row">
        <Button>
          <LayoutGrid width={24} />
          Browns All Categories
        </Button>
        <MenuContainer>
          <li>
            <House width={20} /> Home
          </li>
          <li>
            <Flame width={20} /> Hot deals
          </li>
          <li>
            <Percent width={20} /> Promotions
          </li>
          <li>
            <Megaphone width={20} /> New products
          </li>
        </MenuContainer>
        <MenuContainer>
          <li className="text-(--primary-color) text-xl!">
            <Phone width={24} /> 1233-7777
          </li>
          <li>24/7 support center</li>
        </MenuContainer>
      </div>
    </StyledHeader>
  );
};

export default Header;
