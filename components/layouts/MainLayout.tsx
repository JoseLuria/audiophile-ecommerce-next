import { FC } from "react";
import { LayoutProps } from "../../interface";
import { CustomHead, Navbar, Footer } from "../";

export const MainLayout: FC<LayoutProps> = ({
  title,
  description,
  otg,
  children,
  className,
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <CustomHead title={title} description={description} otg={otg} />
      <Navbar />
      <div className="w-full flex-grow">{children}</div>
      <Footer />
    </div>
  );
};
