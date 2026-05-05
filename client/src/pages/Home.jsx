import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";

export const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
    </div>
  );
};
