// custom-elements.d.ts
import {JSX, React} from 'react';

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }
  