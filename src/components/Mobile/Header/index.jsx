import React from "react";
import { Link } from "react-router-dom";
import MobileSearch from "./Search";

// style
import './MobileHeader.scss'
import logo from '../../../assets/images/logo-mobile.svg'


export default function MobileHeader() {
  return (
    <section className="mheader">
      <button className="mheader__sbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i className='bx bx-search'></i></button>
      <div className="mheader__logobox">
        <Link to="/"><img src={logo} alt="mobile-logo" width="122" height="23" /></Link>
      </div>
      <div className="mheader__menubox">
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" fill="#072d4b" />
        </svg>
      </div>
      <MobileSearch />
    </section>
  )
}