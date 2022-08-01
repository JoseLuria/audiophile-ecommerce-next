import { useRouter } from "next/router";
import React from "react";

export const GoBack = () => {
  const { back } = useRouter();

  return (
    <button
      onClick={back}
      className="text-black font-medium text-opacity-50 mb-6 lg:mb-14 hover:text-beige hover:text-opacity-100 focus-visible:text-beige focus-visible:text-opacity-100"
    >
      Go back
    </button>
  );
};
