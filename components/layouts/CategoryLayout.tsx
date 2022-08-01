import { FC } from "react";
import { LayoutProps } from "../../interface";
import { CustomHead, Navbar, CategoriesList, BestAudio, Footer } from "../";

export const CategoryLayout: FC<LayoutProps> = ({
  title,
  description,
  otg,
  children,
}) => {
  return (
    <>
      <CustomHead title={title} description={description} otg={otg} />
      <Navbar />
      <header className="bg-black pt-[5.625rem] lg:pt-20">
        <div className="p-8 flex md:p-24">
          <h1 className="m-auto text-white uppercase font-bold text-[1.75rem] md:text-[2.5rem]">
            {title}
          </h1>
        </div>
      </header>
      <main className="w-full flex justify-center px-6 pt-16 pb-[7.5rem] md:px-10 md:py-24 lg:pt-[7.5rem] lg:pb-[12.5rem]">
        <div className="w-full max-w-size flex flex-col gap-[7.5rem] lg:gap-40">
          {children}
          <CategoriesList />
          <BestAudio />
        </div>
      </main>
      <Footer />
    </>
  );
};
