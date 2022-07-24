import React from "react";
import { NavLink } from "react-router-dom";
import Hudud from "./Hudud";
import Rukn from "./Rukn";

//icons
import audio from '../../assets/icons/sidebar/audio.svg'
import home from '../../assets/icons/sidebar/home.svg'
import video from '../../assets/icons/sidebar/video.svg'
import rukn from '../../assets/icons/sidebar/rukn.svg'
import menu from '../../assets/icons/sidebar/menu.svg'

//translation
import "../../i18next"
import { useTranslation } from "react-i18next";




export default function Nav() {

  const {t, i18n} = useTranslation()

  return (
    <nav className="sidebar__nav">
      <ul className="sidebar__nav-list" id="accordionFlushExample">
        <NavLink to="/" className="sidebar__nav-link">
          <li className="">
            <div className="sidebar__nav-item sidebar__nav-active">
              <img className="sidebar__nav-icon" src={home} alt="" /> {t('boshsahifa')}
            </div>
          </li>
        </NavLink>
        <NavLink to="/" className="sidebar__nav-link">
          <li className="">
            <div className="sidebar__nav-item">
              <img className="sidebar__nav-icon" src={menu} alt="" /> {t('Yangi-lentasi')}
            </div>
          </li>
        </NavLink>
        <li className="" id="flush-headingOne" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          <div className="sidebar__nav-item">
            <img className="sidebar__nav-icon" src={rukn} alt="" /> Ruknlar
            <i className='bx bx-chevron-right sidebar__nav-right'></i>
          </div>
          <Rukn />
        </li>
        <NavLink to="/" className="sidebar__nav-link">
          <li className="">
            <div className="sidebar__nav-item">
              <img className="sidebar__nav-icon" src={audio} alt="" /> {t('Audio-xabar')}
            </div>
          </li>
        </NavLink>
        <NavLink to="/" className="sidebar__nav-link">
          <li className="">
            <div className="sidebar__nav-item">
              <img className="sidebar__nav-icon" src={video} alt="" /> {t('Video-xabar')}
            </div>
          </li>
        </NavLink>
        <li className="" id="flush-headingTwo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          <div className="sidebar__nav-item">
            <i className='sidebar__nav-icon bx bx-globe'></i>
            {t('Hudud')}
            <i className='bx bx-chevron-right sidebar__nav-right'></i>
          </div>
          <Hudud />
        </li>
      </ul>
    </nav>
  )
}