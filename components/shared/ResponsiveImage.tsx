import { FC } from "react";
import { ResponsiveImages, ComponentProps } from "../../interface";
import { useResponsiveImages } from "../../hooks";
import Image from "next/image";

interface Props extends ComponentProps {
  image: ResponsiveImages;
  alt: string;
}

export const ResponsiveImage: FC<Props> = ({
  image,
  className,
  style,
  alt,
}) => {
  const { width, height, src } = useResponsiveImages(image);

  return (
    <Image
      style={style}
      className={className}
      width={width}
      height={height}
      src={src}
      alt={alt}
    />
  );
};
