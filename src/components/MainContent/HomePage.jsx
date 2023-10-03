import React from "react";
import Stories from "./HomePageComp/Stories";
import WritePost from "./HomePageComp/WritePost";
// import Post from "./HomePageComp/Post";
import Posts from "./HomePageComp/Posts";

const HomePage = () => {
  return (
    <div className="homePage">
      <Stories />
      <WritePost />
      <Posts />
    </div>
  );
};

export default HomePage;
