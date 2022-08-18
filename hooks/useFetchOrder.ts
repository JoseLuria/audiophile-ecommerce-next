import { useState } from "react";
import { createFetchOptions } from "@/utils";
import { OrderInterface, OrderData } from "@/interface";

export const useFetchOrder = () => {
  const [data, setData] = useState<OrderData>();
  const [loader, setLoader] = useState(false);

  const handleSubmitOrder = async (body: OrderInterface) => {
    try {
      setLoader(true);
      const options = createFetchOptions(body);
      const response = await fetch("/api/order", options);
      const result = await response.json();
      setData(result);
      document.body.classList.add("no-scroll");
      setLoader(false);
    } catch (error: any) {
      const errorMessage = error as { message: string };
      setData(errorMessage);
      setLoader(false);
    }
  };

  return {
    data,
    loader,
    handleSubmitOrder,
  };
};
