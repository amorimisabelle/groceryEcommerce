import ReactStars from 'react-stars';
import { ProductCardTemplate } from './ProductCard.styles';

interface ProductCardProps {
  type?: 'categories' | 'price' | 'price&stock';
  index: number;
  name: string;
  image: string;
  initialStock: number;
  currentStock: number;
  category?: string;
  description?: string;
  price?: number;
  specialPrice?: number;
  brand?: string;
  rate?: number;
}

const ProductCard = ({
  type,
  index,
  name,
  image,
  initialStock,
  currentStock,
  category,
  price,
  specialPrice,
  brand,
  rate,
}: ProductCardProps) => {
  return (
    <>
      <ProductCardTemplate type={type} index={index}>
        <img src={image} alt={name} />
        {type !== 'categories' ? <h4>{category}</h4> : null}
        <h3>{name}</h3>
        {rate && type !== 'categories' && (
          <ReactStars
            count={5}
            value={rate}
            size={16}
            color1="#d1d5db"
            color2="#fbbf24"
            edit={false}
          />
        )}
        {brand && type !== 'categories' && <p className="brand">By {brand}</p>}
        {price && type !== 'categories' && (
          <div className="flex gap-2 items-center price">
            <p>${specialPrice}</p>
            <p>{price}</p>
          </div>
        )}
        {type === 'categories' ? (
          <p>
            {currentStock} {currentStock > 1 ? 'Items' : 'Item'}
          </p>
        ) : (
          type !== 'price' && (
            <div>
              <p>
                Sold: {initialStock}/{currentStock}
              </p>
            </div>
          )
        )}
      </ProductCardTemplate>
    </>
  );
};

export default ProductCard;
