import { theme as defaultTheme } from '@mycrypto/ui';
import merge from 'lodash.merge';

export const theme = merge(defaultTheme, {
  colors: {
    banner: {
      background: '#f7f3ff'
    },
    feature: {
      background: '#ddf0f9'
    },
    overview: {
      highlight: '#a480ff',
      check: '#7abc34',
      uncheck: '#ef4848',
      border: '#b5bfc7'
    },
    background: {
      page: 'white'
    }
  },
  text: {
    heading: {
      color: 'text.primary',
      lineHeight: '120%'
    },
    subHeading: {
      color: 'text.primary',
      fontWeight: 'normal',
      lineHeight: '150%'
    }
  },
  fontSizes: {
    tiny: '14px',
    small: '18px',
    medium: '24px',
    large: '45px'
  },
  radii: {
    feature: '18px'
  },
  variants: {
    slideshow: {
      active: {
        fontFamily: 'body',
        fontSize: '24px',
        lineHeight: '133.3%',
        color: '#a480ff',
        fontWeight: 'heading',
        borderBottom: '2px solid #a480ff',
        cursor: 'pointer'
      },
      inactive: {
        fontFamily: 'body',
        fontSize: '24px',
        lineHeight: '133.3%',
        color: 'text.primary',
        fontWeight: 'heading',
        opacity: '0.5',
        cursor: 'pointer'
      }
    }
  }
});

export type Theme = typeof theme;
