import React from "react";
import Footer from "@/sections/Footer/Footer";
import Header from "../Header/Header";

const Main = (props) => {
  return (
    <div>
      <Header />
      <div className="min-h-[75vh] bg-zinc-800">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Main;
