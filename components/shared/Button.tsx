import { FC } from "react";
import Image from "next/image";
import { Link } from "@/components";
import { ComponentProps } from "@/interface";

interface Props extends ComponentProps {
  action?: () => void;
  full?: boolean;
  variant?: "default" | "black" | "outline" | "text";
  href?: string;
  newTab?: boolean;
  type?: "button" | "link";
  disabled?: boolean;
}

export const Button: FC<Props> = ({
  children,
  className,
  style,
  full,
  variant = "default",
  href = "/",
  action,
  type = "button",
  disabled,
}) => {
  const btnVariants = () => {
    switch (variant) {
      case "black":
        return "btn-black";
      case "outline":
        return "btn-outline";
      case "text":
        return "btn-text";
      default:
        return "btn-default";
    }
  };

  const btnVariant = btnVariants();
  const btnStyles = `btn-base ${btnVariant} ${full && "w-full"} ${className}`;
  const defaultText = "See product";

  switch (type) {
    case "link":
      return (
        <Link className={btnStyles} style={style} action={action} href={href}>
          {children ? children : defaultText}
          {variant === "text" && (
            <Image
              width={8}
              height={12}
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="Arrow Right Icon"
            />
          )}
        </Link>
      );
    default:
      return (
        <button
          className={btnStyles}
          style={style}
          onClick={action}
          disabled={disabled}
        >
          {children ? children : defaultText}
          {variant === "text" && (
            <Image
              width={8}
              height={12}
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="Arrow Right Icon"
            />
          )}
        </button>
      );
  }
};
