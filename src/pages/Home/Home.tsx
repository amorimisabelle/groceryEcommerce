import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { HeroBanner } from './Home.styles';
import { Send } from 'lucide-react';
import ProductCardTemplate from '../../components/ProductCardTemplate/ProductCardTemplate';
import { useState } from 'react';
import { PRODUCT_CATEGORIES, type ProductCategory } from '../../types/categories';
import type { IProduct, IProductsGroups } from '../../types/product';
import productsLists from '../../mocks/products';
import { BannerTemplate } from '../../components/Banner/BannerTemplate';

const Home = () => {
  const { productsNamesList, allProductsList } = productsLists;
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentList, setCurrentList] = useState<string>('');

  // Seta qual categoria é selecionada baseada no tipo de lista
  const handleCategorySelect = (category: string, listType: string) => {
    setSelectedCategory(category);
    setCurrentList(listType);
  };

  const getProductsByCategory = (category?: string, currentList?: string) => {
    const isValidCategory = PRODUCT_CATEGORIES.includes(category as ProductCategory);

    if (!isValidCategory || category === 'All') {
      return allProductsList.flatMap((group) => group.products);
    }

    if (currentList === 'exploreCategories') {
      const group = productsNamesList.find((group) => group.category === category);
      return group?.products;
    }

    if (currentList === 'featuredProducts') {
      const productsByCategory = productsNamesList.find((group) => group.category === category);
      return productsByCategory?.products;
    }

    return undefined;
  };

  const currentProducts: IProduct[] | IProductsGroups[] = selectedCategory
    ? getProductsByCategory(selectedCategory, currentList) || []
    : getProductsByCategory('All', currentList) || [];

  return (
    <>
      <Header />
      <HeroBanner className="hero-bg">
        <article className="text-left">
          <div className="flex flex-col gap-8 pb-12! xl:w-[65%]">
            <h1>Don't miss our daily amazing deals.</h1>
            <p>Save up to 60% off on your first order</p>
          </div>
          <div className="flex items-center gap-1 bg-(--gray-100) rounded-md w-fit pl-4!">
            <Send width={18} />
            <input type="text" placeholder="Enter your email address" />
            <Button>Subscribe</Button>
          </div>
        </article>
      </HeroBanner>
      <ProductCardTemplate
        title="Explore Categories"
        cardType="categories"
        onCategorySelect={(category) => handleCategorySelect(category, 'exploreCategories')}
        productsList={currentProducts}
      />
      <ProductCardTemplate
        title="Featured Products"
        cardType="price"
        onCategorySelect={(category) => handleCategorySelect(category, 'featuredProducts')}
        productsList={currentProducts}
      />
      <div className="flex flex-row gap-2">
        <BannerTemplate
          title="Free delivery over $50"
          variant="primary"
          tagText="Free delivery"
          text="Shop $50 product and get free delivery anywhre."
          buttonText="Shop Now"
          img=""
        />
        <BannerTemplate
          title="Free delivery over $50"
          variant="secondary"
          tagText="Free delivery"
          text="Shop $50 product and get free delivery anywhre."
          buttonText="Shop Now"
        />
      </div>
    </>
  );
};

export default Home;
