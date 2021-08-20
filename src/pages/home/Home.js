import React from "react";
import Header from "../../components/header/Header";
import "./home.css";
import Post from "../../pages/posts/Post";
import SideBar from "../../components/sideBar/SideBar";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Post />
        <SideBar />
      </div>
    </>
  );
}

export default Home;
