import { PRODUCT_CATEGORIES } from '../../types/categories';
import { ProductCategorisTemplate } from './ProductCardTemplate.styles';
import ProductSlider from './ProductSlider/ProductSlider';
import type { IProduct, IProductsGroups } from '../../types/product';

interface ProductCardProps {
  title: string;
  productsList: IProduct[] | IProductsGroups[];
  cardType?: 'categories' | 'price' | 'price&stock';
  onCategorySelect?: (category: string) => void;
}

const ProductCardTemplate = ({
  title,
  productsList,
  cardType,
  onCategorySelect,
}: ProductCardProps) => {
  const productCategories = PRODUCT_CATEGORIES;

  const handleCategoryClick = (category: string) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <ProductCategorisTemplate>
      <div className="templateHeader">
        <h2>{title}</h2>
        <ul>
          {productCategories.map((category) => (
            <li key={category}>
              <a onClick={() => handleCategoryClick(category)}>{category}</a>
            </li>
          ))}
        </ul>
      </div>
      <ProductSlider
        products={productsList}
        itemsPerPage={cardType === 'categories' ? 6 : 5}
        cardType={cardType}
      />
    </ProductCategorisTemplate>
  );
};

export default ProductCardTemplate;
