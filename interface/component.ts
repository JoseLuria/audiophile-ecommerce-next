import { CSSProperties, ReactNode } from "react";
import { HeadInterface } from "@/interface";

export interface ComponentProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export interface LayoutProps extends HeadInterface {
  children?: ReactNode;
  className?: string;
}
