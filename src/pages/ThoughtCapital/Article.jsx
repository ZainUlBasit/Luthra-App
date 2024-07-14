import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ArticleCard from "../../components/Cards/FirmCards/ArticleCard";
import Footer from "../../components/Footer/Footer";

const Article = () => {
  return (
    <div>
      <Navbar />
      <div className="font-bold font-righteous text-3xl w-full text-center py-10">
        ARTICLE
      </div>
      <div className="flex justify-between items-center  flex-wrap gap-x-10 gap-y-10 px-[80px] mb-10">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
      <Footer />
    </div>
  );
};

export default Article;
