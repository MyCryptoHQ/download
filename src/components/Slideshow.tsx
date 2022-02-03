import { Body, Box, Heading, Image, SubHeading } from '@mycrypto/ui';
import type { FunctionComponent } from 'react';
import { useEffect, useState } from 'react';

export interface Slide {
  title: string;
  text: string;
  image: string;
}

export interface SlideshowButtonProps {
  index: number;
  title: string;
  isActive: boolean;

  onClick(index: number): void;
}

export interface SlideshowProps {
  title: string;
  imagePosition?: 'left' | 'right';
  slides: Slide[];
}

export const SlideshowButton: FunctionComponent<SlideshowButtonProps> = ({
  title,
  isActive,
  onClick,
  index
}) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <SubHeading
      marginRight="4"
      variant={isActive ? 'variants.slideshow.active' : 'variants.slideshow.inactive'}
      onClick={handleClick}
    >
      {title}
    </SubHeading>
  );
};

export const Slideshow: FunctionComponent<SlideshowProps> = ({
  title,
  slides,
  imagePosition = 'left'
}) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (slides.length - 1 > slide) {
        return setSlide((state) => state + 1);
      }

      setSlide(0);
    }, 7500);

    return () => clearTimeout(timeout);
  }, [slide]);

  const handleClick = (index: number) => setSlide(index);

  const current = slides[slide];
  const image = (
    <Box minWidth="400px" minHeight="400px" display="flex" alignItems="center" marginX="3">
      <Image src={current.image} alt={current.title} sx={{ userSelect: 'none' }} />
    </Box>
  );

  return (
    <Box display="flex" alignItems="center">
      {imagePosition === 'left' && image}
      <Box>
        <Heading>{title}</Heading>
        <Box display="flex" marginTop="3">
          {slides.map((value, index) => (
            <SlideshowButton
              key={`slide-${value.title}`}
              title={value.title}
              isActive={index === slide}
              index={index}
              onClick={handleClick}
            />
          ))}
        </Box>
        <Body fontSize="20px" lineHeight="150%" marginTop="3" sx={{ overflowWrap: 'break-word' }}>
          {current.text}
        </Body>
      </Box>
      {imagePosition === 'right' && image}
    </Box>
  );
};
