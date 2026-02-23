import Header from '../../components/Header/Header';
import { HeroBanner } from './Home.styles';
import ProductCardTemplate from '../../components/ProductCardTemplate/ProductCardTemplate';
import { useState } from 'react';
import { PRODUCT_CATEGORIES, type ProductCategory } from '../../types/categories';
import type { IProduct, IProductsGroups } from '../../types/product';
import productsLists from '../../mocks/products';
import { BannerTemplate } from '../../components/Banner/BannerTemplate';
import Input from '../../components/Input/Input';
import TopRank from '../../components/TopRank/TopRank';
import { TOPRANK_CATEGORIES, type TopRankCategory } from '../../mocks/categories';

const Home = () => {
  const { productsNamesList, allProductsList } = productsLists;
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentList, setCurrentList] = useState<string>('All');

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
      const productsByCategory = allProductsList.find((group) => group.category === category);
      return productsByCategory?.products;
    }

    return undefined;
  };

  const getTopRanked = (
    allProducts: { category: string; products: IProduct[] }[],
    rankType: TopRankCategory
  ) => {
    // Combinar todos os produtos de todas as categorias
    const allProductsCombined = allProducts.flatMap(
      (category: { category: string; products: IProduct[] }) => category.products
    );

    const topRankedProducts = allProductsCombined.sort((a: IProduct, b: IProduct) => {
      if (rankType === 'Top Rated') {
        return b.rate - a.rate;
      }

      if (rankType === 'Top Sells') {
        return (b.currentStock * 100) / b.initialStock - (a.currentStock * 100) / a.initialStock;
      }

      if (rankType === 'Recently Added') {
        return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
      }

      return (b.currentStock * 100) / b.initialStock - (a.currentStock * 100) / a.initialStock;
    });

    return topRankedProducts;
  };

  const currentProducts: IProduct[] | IProductsGroups[] = selectedCategory
    ? getProductsByCategory(selectedCategory, currentList) || []
    : getProductsByCategory('All', currentList) || [];

  return (
    <>
      <Header />
      <HeroBanner className="hero-bg">
        <article className="text-left w-6/12">
          <div className="flex flex-col gap-8 pb-12!">
            <h1>Don't miss our daily amazing deals.</h1>
            <p>Save up to 60% off on your first order</p>
          </div>
          <Input
            icon="send"
            placeholder="Enter your email address"
            required={true}
            buttonText="Subscribe"
          />
        </article>
      </HeroBanner>
      <ProductCardTemplate
        title="Explore Categories"
        cardType="categories"
        selectedCategory={selectedCategory as ProductCategory}
        onCategorySelect={(category) => handleCategorySelect(category, 'exploreCategories')}
        productsList={currentProducts}
      />
      <ProductCardTemplate
        title="Featured Products"
        cardType="price"
        selectedCategory={selectedCategory as ProductCategory}
        onCategorySelect={(category) => handleCategorySelect(category, 'featuredProducts')}
        productsList={currentProducts}
      />
      <div className="flex gap-6 w-[90%] mx-auto! mt-24!">
        <BannerTemplate
          title="Free delivery over $50"
          variant="primary"
          tagText="Free delivery"
          text="Shop $50 product and get free delivery anywhre."
          buttonText="Shop Now"
        />
        <BannerTemplate
          title="Organic Food"
          variant="secondary"
          tagText="60% off"
          text="Save up to 60% off on your first order"
          buttonText="Order Now"
        />
      </div>
      <ProductCardTemplate
        title="Daily Best Sells"
        cardType="price&stock"
        selectedCategory={selectedCategory as ProductCategory}
        onCategorySelect={(category) => handleCategorySelect(category, 'price&stock')}
        productsList={currentProducts}
      />
      <section className="lg:w-11/12 mx-auto! flex! gap-20 mt-20!">
        {TOPRANK_CATEGORIES.map((category: string) => {
          return (
            <TopRank
              productsList={getTopRanked(allProductsList, category as TopRankCategory)}
              title={category}
            />
          );
        })}
      </section>
    </>
  );
};

export default Home;
