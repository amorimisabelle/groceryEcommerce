import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard';
import { ProductSliderContainer } from './ProductSlider.styles';
import productImage from '../../../assets/images/smallCard-img.png';
import Button from '../../Button/Button';
import type { IProduct, IProductsGroups } from '../../../types/product';

interface ProductSliderProps {
  products: IProduct[] | IProductsGroups[];
  itemsPerPage?: number;
  cardType?: 'categories' | 'price' | 'price&stock';
}

const ProductSlider = ({ products, itemsPerPage, cardType }: ProductSliderProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <ProductSliderContainer>
      <div className="product-slider-container">
        {totalPages > 1 && (
          <Button variant="sliderArrow" onClick={goToPrev} disabled={currentPage === 0}>
            <ArrowLeft />
          </Button>
        )}
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={startIndex + index}
            name={product.name}
            category={product.category}
            rate={product.rate}
            brand={product.brand}
            price={product.price}
            specialPrice={product.specialPrice}
            image={productImage}
            index={startIndex + index}
            type={cardType}
            initialStock={product.initialStock}
            currentStock={product.currentStock}
          />
        ))}
        {totalPages > 1 && (
          <Button
            variant="sliderArrow"
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
          >
            <ArrowRight />
          </Button>
        )}
      </div>
    </ProductSliderContainer>
  );
};

export default ProductSlider;
