import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { HeroBanner } from './Home.styles';
import { Send } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Header />
      <HeroBanner>
        <article className="text-left">
          <div className="flex flex-col gap-8 pb-12! xl:w-[65%]">
            <h1>Don’t miss our daily amazing deals.</h1>
            <p>Save up to 60% off on your first order</p>
          </div>
          <div className="flex items-center gap-1 bg-(--gray-100) rounded-md w-fit pl-4!">
            <Send width={18} />
            <input type="text" placeholder="Enter your email address" />
            <Button>Subscribe</Button>
          </div>
        </article>
      </HeroBanner>
    </>
  );
};

export default Home;
