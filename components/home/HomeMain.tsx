import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const HomeMain: FC<Props> = ({ children }) => {
  return (
    <main className="w-full flex justify-center px-6 pt-10 pb-[7.5rem] md:py-24 md:px-10 lg:pt-[7.5rem] lg:pb-[12.5rem]">
      <div className="w-full max-w-size flex flex-col gap-[7.5rem] md:gap-24 lg:gap-[10.5rem]">
        {children}
      </div>
    </main>
  );
};
