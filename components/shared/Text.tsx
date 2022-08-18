import { FC } from "react";
import { ComponentProps } from "@/interface";

interface Props extends ComponentProps {
  color?: "white" | "black" | "beige";
  newText?: boolean;
  uppercase?: boolean;
}

export const Text: FC<Props> = ({
  children,
  className,
  style,
  color = "white",
  newText,
  uppercase,
}) => {
  const textColors = () => {
    switch (color) {
      case "black":
        return "text-black";
      case "beige":
        return "text-beige";
      default:
        return "text-white";
    }
  };

  const textStyles = `text-[0.938rem] whitespace-pre-wrap ${
    color !== "beige" && "text-opacity-50"
  } ${newText ? "tracking-[0.625rem] uppercase font-normal" : "font-medium"} ${
    uppercase && "uppercase"
  }`;

  const textColor = textColors();

  return (
    <p className={`${textStyles} ${textColor} ${className}`} style={style}>
      {children}
    </p>
  );
};
