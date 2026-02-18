import Button from '../Button/Button';
import BannerTemplateStyle from './BannerTemplate.styles';
import { ArrowRight } from 'lucide-react';
import bannerImage1 from '../../assets/images/Offer1-img.png';
import bannerImage2 from '../../assets/images/Offer2-img.png';

interface IBannerTemplateProps {
  tagText: string;
  title: string;
  text: string;
  buttonText: string;
  variant: 'primary' | 'secondary';
}

export const BannerTemplate = ({
  tagText,
  variant,
  title,
  text,
  buttonText,
}: IBannerTemplateProps) => {
  return (
    <BannerTemplateStyle variant={variant}>
      <div>
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
    </BannerTemplateStyle>
  );
};
