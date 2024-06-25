declare module 'react-reveal/Reveal' {
  import * as React from 'react';

  export interface RevealProps {
    when?: boolean;
    duration?: number;
    delay?: number;
    effect?: string;
    children?: React.ReactNode;
  }

  export default class Reveal extends React.Component<RevealProps> {}
}

declare module 'react-reveal/Slide' {
  import * as React from 'react';

  export interface SlideProps {
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    duration?: number;
    delay?: number;
    children?: React.ReactNode;
    when?: boolean;
  }

  export default class Slide extends React.Component<SlideProps> {}
}
