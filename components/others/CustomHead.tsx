import { FC } from "react";
import Head from "next/head";
import { HeadInterface } from "../../interface";
import { data } from "../../database";

export const CustomHead: FC<HeadInterface> = ({ title, description, otg }) => {
  return (
    <Head>
      <title>{`${title} | Audiophile E-commerce`}</title>
      <meta
        name="description"
        content={description ? description : data.head}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | Audiophile e-commerce`} />
      <meta
        property="og:description"
        content={description ? description : data.head}
      />
      <meta property="og:image" content={otg ? otg : "/assets/otg-image.jpg"} />
    </Head>
  );
};
