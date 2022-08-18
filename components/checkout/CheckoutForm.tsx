import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CheckoutCart,
  Input,
  FormGroup,
  Text,
  CheckoutResult,
} from "@/components";
import { yupOrder } from "@/validations";
import { OrderInterface } from "@/interface";
import { useFetchOrder } from "@/hooks";

export const CheckoutFrom = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    unregister,
  } = useForm<OrderInterface>({ resolver: yupResolver(yupOrder) });

  const [showInputs, setShowInputs] = useState<boolean>(false);

  const { data, loader, handleSubmitOrder } = useFetchOrder();

  const handleGetValues = () => {
    const payMethodValue = getValues("payMethod");
    payMethodValue === "e-money" ? setShowInputs(true) : setShowInputs(false);
    if (payMethodValue === "cash") {
      unregister("eMoneyNumber");
      unregister("eMoneyPin");
    }
  };

  return (
    <>
      {(data || loader) && <CheckoutResult data={data} />}
      <form
        onChange={handleGetValues}
        onSubmit={handleSubmit(handleSubmitOrder)}
        className="flex flex-col lg:flex-row lg:gap-7"
      >
        <div className="rounded-lg p-6 bg-white flex flex-col gap-8 grow md:p-8 md:gap-14 lg:px-12 lg:py-14">
          <FormGroup title="Billing details">
            <Input
              id="name"
              register={register}
              label="Name"
              placeholder="Alexei Ward"
              error={errors.name}
            />
            <Input
              id="email"
              register={register}
              label="Email Address"
              placeholder="alexei@mail.com"
              error={errors.email}
            />
            <Input
              id="phone"
              register={register}
              label="Phone Number"
              placeholder="+1 202-555-0136"
              error={errors.phone}
            />
          </FormGroup>
          <FormGroup title="Shipping Info">
            <Input
              id="adress"
              register={register}
              className="col-span-full"
              label="Address"
              placeholder="1137 Williams Avenue"
              error={errors.adress}
            />
            <Input
              id="zip"
              register={register}
              label="ZIP Code"
              placeholder="10001"
              error={errors.zip}
            />
            <Input
              id="city"
              register={register}
              label="City"
              placeholder="New York"
              error={errors.city}
            />
            <Input
              id="country"
              register={register}
              label="Country"
              placeholder="United States"
              error={errors.country}
            />
          </FormGroup>
          <FormGroup title="Payment Details">
            <p className="text-xs font-bold">Payment Method</p>
            <div className="flex flex-col gap-4">
              <Input
                id="payMethod"
                type="radio"
                register={register}
                label="e-Money"
                value="e-money"
              />
              <Input
                id="payMethod"
                type="radio"
                register={register}
                label="Cash on Delivery"
                value="cash"
                defaultChecked
              />
            </div>
            {showInputs ? (
              <>
                <Input
                  id="eMoneyNumber"
                  register={register}
                  label="e-Money Number"
                  placeholder="238521993"
                  error={errors.eMoneyNumber}
                />
                <Input
                  id="eMoneyPin"
                  register={register}
                  label="e-Money PIN"
                  placeholder="6891"
                  error={errors.eMoneyPin}
                />
              </>
            ) : (
              <div className="col-span-full w-full max-w-[39.625rem] gap-8 flex">
                <span className="w-12">
                  <Image
                    src="/assets/shared/desktop/cash-icon.svg"
                    width={48}
                    height={48}
                    alt="Cash Icon"
                  />
                </span>
                <Text className="w-[calc(100%-5rem)]" color="black">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </Text>
              </div>
            )}
          </FormGroup>
        </div>
        <CheckoutCart>
          <input
            className="btn-base btn-default w-full"
            type="submit"
            value="Continue & pay"
            disabled={loader}
          />
        </CheckoutCart>
      </form>
    </>
  );
};
