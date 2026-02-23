import Button from '../Button/Button';
import BannerTemplateStyle from './BannerTemplate.styles';
import { ArrowRight } from 'lucide-react';
import bannerImage1 from '../../assets/images/Offer1-img.png';
import bannerImage2 from '../../assets/images/Offer2-img.png';
import Input from '../Input/Input';
// import { useState } from 'react';

interface IBannerTemplateProps {
  tagText: string;
  title: string;
  text: string;
  buttonText: string;
  variant: 'primary' | 'secondary' | 'terciary';
}

export const BannerTemplate = ({
  tagText,
  variant,
  title,
  text,
  buttonText,
}: IBannerTemplateProps) => {
  // const [showErrorMessage, setShowErrorMessage] = useState(false);

  // const handleErrorMessage = () => {
  //   setShowErrorMessage(true);
  // };

  return (
    <BannerTemplateStyle variant={variant}>
      {variant === 'terciary' ? (
        <div className="singleColumn">
          <article>
            <h3>10% OFF</h3>
            <p>For new member sign up at the first time</p>
          </article>
          <div className="flex flex-col gap-2">
            <Input
              icon="mail"
              labelText="Email address*"
              placeholder="Enter your email"
              required={true}
              errorMessage="Fill with your best email address"
              // showErrorMessage={showErrorMessage}
            />
            <Input
              icon="key"
              labelText="Password*"
              maxLength={8}
              placeholder="Maximum 8 characters"
              required={true}
              errorMessage="Fill with your best email address"
              // showErrorMessage={showErrorMessage}
            />
          </div>
          <Button>Register Now</Button>
        </div>
      ) : null}

      {variant !== 'terciary' ? (
        <>
          <div className="firstColumn">
            <article className="text-left!">
              <span>{tagText}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
            <Button variant="primary">
              {buttonText} <ArrowRight />
            </Button>
          </div>
          <img src={variant === 'primary' ? bannerImage1 : bannerImage2} alt="" />
        </>
      ) : null}
    </BannerTemplateStyle>
  );
};
