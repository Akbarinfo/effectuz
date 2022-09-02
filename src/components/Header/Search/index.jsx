import React from "react";
import Header from "..";
import Aside from "../../Aside";
import Footer from "../../Footer";
import Sidebar from "../../Sidebar";
import SearchItem from "./SearchItem";

export default function Search() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className="dflex">
          <Sidebar />
          <div className="main">
            <div className="main__box">
              <SearchItem />
            </div>
          </div>
          <Aside />
        </div>
        <Footer />
      </div>
    </>
  )
}