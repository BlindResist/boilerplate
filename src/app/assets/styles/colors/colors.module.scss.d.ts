export type Styles = {
  'white': string;
  'black': string;
  'primary': string;
  'secondary': string;
  'secondary-2': string;
  'secondary-3': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
