export type ResponsiveImageElement = {
  width: number;
  height: number;
  src: string;
};

export interface ResponsiveImages {
  mobile: ResponsiveImageElement;
  tablet: ResponsiveImageElement;
  desktop: ResponsiveImageElement;
}
