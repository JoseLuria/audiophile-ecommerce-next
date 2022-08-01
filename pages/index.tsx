import type { NextPage } from "next";
import {
  MainLayout,
  HomeHeader,
  HomeMain,
  CategoriesList,
  HomeProducts,
  BestAudio,
} from "../components";

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <HomeHeader />
      <HomeMain>
        <CategoriesList />
        <HomeProducts />
        <BestAudio />
      </HomeMain>
    </MainLayout>
  );
};

export default Home;
