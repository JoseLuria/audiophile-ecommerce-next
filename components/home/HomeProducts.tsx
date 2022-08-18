import { HomeProductOne, HomeProductTwo, HomeProductThree } from "@/components";

export const HomeProducts = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-8 lg:gap-12">
      <HomeProductOne />
      <HomeProductTwo />
      <HomeProductThree />
    </section>
  );
};
