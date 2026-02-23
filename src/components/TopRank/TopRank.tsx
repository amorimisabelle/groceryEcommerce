import TopRankStyled from './TopRank.styles';
import ReactStars from 'react-stars';
import type { IProduct } from '../../types/product';

interface ITopRankProps {
  title: string;
  productsList: IProduct[];
}

const TopRank = ({ productsList, title }: ITopRankProps) => {
  const getTopFourProducts = (productsList: IProduct[]) => {
    return productsList.slice(0, 4);
  };
  const topRankedTopList = getTopFourProducts(productsList);

  return (
    <TopRankStyled>
      <div className="header">
        <h3 className="border-solid border-b-4! border-(--primary-color)! w-fit pb-2! relative z-2 -mb-1!">
          {title}
        </h3>
        <div className="h-1! rounded-sm bg-(--gray-100)"></div>
      </div>
      {topRankedTopList.map((product, index) => (
        <div className="row" key={index}>
          <img src={product.image || undefined} alt={product.name} />
          <div className="rowBody">
            <div>
              <h4>{product.name}</h4>
              <div className="flex gap-1 items-center">
                <ReactStars
                  count={5}
                  value={product.rate}
                  size={20}
                  color1="#d1d5db"
                  color2="#fbbf24"
                  edit={false}
                />
                <small>{`(${product.rate})`}</small>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2 items-center price">
                <p>${product.specialPrice}</p>
                <p>{product.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </TopRankStyled>
  );
};

export default TopRank;
