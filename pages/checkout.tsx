import { MainLayout, GoBack, CheckoutCart } from "../components";

const Checkout = () => {
  return (
    <MainLayout title="Checkout" className="lg:bg-[#F1F1F1]">
      <main className="pt-[5.625rem] pb-24 flex justify-center px-6 md:pb-28 md:px-10 lg:pb-32 lg:pt-24">
        <div className="w-full max-w-size mt-4 md:mt-12 lg:mt-20">
          <GoBack />
          <div className="flex flex-col lg:flex-row lg:gap-7">
            <CheckoutCart />
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Checkout;
