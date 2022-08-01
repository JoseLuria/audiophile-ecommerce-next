import { FC } from "react";
import { LayoutProps } from "../../interface";
import {
  CustomHead,
  Navbar,
  Footer,
  CategoriesList,
  BestAudio,
  GoBack,
} from "../";

export const ProductLayout: FC<LayoutProps> = ({
  title,
  description,
  otg,
  children,
}) => {
  return (
    <>
      <CustomHead title={title} description={description} otg={otg} />
      <Navbar />
      <main className="w-full pt-[5.625rem] pb-[7.5rem] px-6 flex justify-center md:px-10 md:pt-24 md:pb-24 lg:pb-[10rem]">
        <div className="w-full max-w-size mt-4 md:mt-[2.063rem] lg:mt-20">
          <GoBack />
          <div className="w-full flex flex-col gap-[7.5rem] lg:gap-[10rem]">
            {children}
            <CategoriesList />
            <BestAudio />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
