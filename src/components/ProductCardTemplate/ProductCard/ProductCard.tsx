import ReactStars from 'react-stars';
import { ProductCardTemplate } from './ProductCard.styles';
import Button from '../../Button/Button';
import { ShoppingCart } from 'lucide-react';
import LinearProgress from '@mui/material/LinearProgress';

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
        <div>
          <img src={image} alt={name} />
          {type === 'price&stock' ? (
            <span className="py-1 px-2! tag">
              Save {Math.round((currentStock * 100) / initialStock)}%
            </span>
          ) : null}
        </div>
        <div>
          {type !== 'categories' ? <h4>{category}</h4> : null}
          <h3>{name}</h3>
        </div>
        <div>
          {rate && type !== 'categories' && (
            <div className="flex gap-1 items-center">
              <ReactStars
                count={5}
                value={rate}
                size={20}
                color1="#d1d5db"
                color2="#fbbf24"
                edit={false}
              />
              <small>{`(${rate})`}</small>
            </div>
          )}
          {brand && type !== 'categories' && <p className="brand">By {brand}</p>}
        </div>
        {type === 'categories' ? (
          <p>
            {currentStock} {currentStock > 1 ? 'Items' : 'Item'}
          </p>
        ) : (
          type !== 'price' && (
            <div className="w-full">
              <LinearProgress
                variant="determinate"
                value={(currentStock * 100) / initialStock}
                sx={{
                  backgroundColor: '#f1f5f9',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#3bb77e',
                  },
                }}
              />
              <p className="stockText mt-1!">
                Sold: {currentStock} /{initialStock}
              </p>
            </div>
          )
        )}
        <div className="flex justify-between items-center w-full">
          {price && type !== 'categories' && (
            <div className="flex gap-2 items-center price">
              <p>${specialPrice}</p>
              <p>{price}</p>
            </div>
          )}
          {type === 'price' && (
            <Button variant="priceCard">
              <ShoppingCart /> Add
            </Button>
          )}
        </div>
        {type === 'price&stock' && (
          <Button variant="fullWidth">
            <ShoppingCart /> Add
          </Button>
        )}
      </ProductCardTemplate>
    </>
  );
};

export default ProductCard;
