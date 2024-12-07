import React, { useContext } from "react";
import LatestBlogs from "../miniComponents/LatestBlogs";
import HeroSection from "../miniComponents/HeroSection";
import TrendingBlogs from "../miniComponents/TrendingBlogs";
import PopularAuthors from "../miniComponents/PopularAuthors";
import { Context } from "../../main";
import FacebookMsg from "../miniComponents/FacebookMsg";

const Home = () => {
  const { mode, blogs } = useContext(Context);
  const filteredBlogs = blogs.slice(0, 6);

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <HeroSection />
      <TrendingBlogs />
      <LatestBlogs heading={"Latest Blogs"} blogs={filteredBlogs} />
      <PopularAuthors />
      <FacebookMsg />
    </article>
  );
};

export default Home;
