import { NextPage } from "next";
import { MainLayout, Button, Text } from "@/components";

const Error: NextPage = () => {
  return (
    <MainLayout title="Not Found">
      <main className="flex justify-center px-6 pt-[5.625rem] md:px-10 lg:pt-24">
        <div className="w-full max-w-size flex flex-col text-center items-center gap-8 py-32">
          <span className="font-bold text-beige text-9xl">404</span>
          <h1 className="text-2xl whitespace-pre-wrap uppercase font-bold md:text-4xl">
            {"Ooops!\nPage not found"}
          </h1>
          <Text color="black">
            {
              "This page does not exist or has been deleted.\nWe suggest you return to the home page."
            }
          </Text>
          <Button type="link" href="/">
            Return to home
          </Button>
        </div>
      </main>
    </MainLayout>
  );
};

export default Error;
