import { PRODUCT_CATEGORIES, type ProductCategory } from '../../types/categories';
import { ProductCategorisTemplate } from './ProductCardTemplate.styles';
import ProductSlider from './ProductSlider/ProductSlider';
import type { IProduct, IProductsGroups } from '../../types/product';
import { BannerTemplate } from '../Banner/BannerTemplate';

interface ProductCardProps {
  title: string;
  productsList: IProduct[] | IProductsGroups[];
  cardType?: 'categories' | 'price' | 'price&stock';
  selectedCategory: ProductCategory;
  onCategorySelect?: (category: string) => void;
}

const ProductCardTemplate = ({
  title,
  productsList,
  cardType,
  selectedCategory,
  onCategorySelect,
}: ProductCardProps) => {
  const productCategories = PRODUCT_CATEGORIES;

  const handleCategoryClick = (category: string) => {
    console.log('Category clicked:', category);
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  const itemsPerPage = cardType === 'categories' ? 6 : cardType === 'price' ? 5 : 4;

  return (
    <ProductCategorisTemplate variant={cardType ? 'secondary' : 'primary'}>
      <div className="templateHeader">
        <h2>{title}</h2>
        <ul>
          {productCategories.map((category) =>
            category === selectedCategory ? (
              <li key={category} className="text-(--primary-color)!">
                <a onClick={() => handleCategoryClick(category)}>{category}</a>
              </li>
            ) : (
              <li key={category}>
                <a onClick={() => handleCategoryClick(category)}>{category}</a>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex justify-center gap-4">
        <ProductSlider products={productsList} itemsPerPage={itemsPerPage} cardType={cardType} />
        {cardType === 'price&stock' ? (
          <BannerTemplate
            title="Free delivery over $50"
            variant="terciary"
            tagText="Free delivery"
            text="Shop $50 product and get free delivery anywhre."
            buttonText="Shop Now"
          />
        ) : null}
      </div>
    </ProductCategorisTemplate>
  );
};

export default ProductCardTemplate;
