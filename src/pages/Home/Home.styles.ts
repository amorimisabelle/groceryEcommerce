import styled from 'styled-components';
import heroBg from '../../assets/images/hero-bg.png';
import heroImg from '../../assets/images/hero-img.png';

export const HeroBanner = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  padding: 0 4rem;
  height: 35vh;
  background-color: rgba(197, 234, 217, 0.75);
  background:
    url(${heroImg}) top right no-repeat,
    url(${heroBg}) repeat;
  background-size: auto, cover;
`;
