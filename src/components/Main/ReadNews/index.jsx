import React from "react";
import Aside from "../../Aside";
import Footer from "../../Footer";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import ReadN from "./ReadNews";
import RealtedNews from "./RealtedNews";

//style
import './readnews.scss'


export default function ReadNews() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className="dflex">
          <Sidebar />
          <div className="main">
            <div className="main__box">
              <ReadN />
            </div>
          </div>
          <Aside />
        </div>
        <RealtedNews />
        <Footer />
      </div>
    </>
  )
}