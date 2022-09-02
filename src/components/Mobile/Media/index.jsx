import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import MobileAudioN from "./AudioNews";

// style
import './Media.scss'
import MobileVideoN from "./VideoNews";

export default function Media() {

  return (
    <>
      <section className="media">
        <h2 className="media__title">Media</h2>

        <ul className="media__list">
          <NavLink className={({ isActive }) =>
            isActive ? "media__link media__active" : "media__link"
          } to={"/media"}>
            <li className="media__item">Video</li>
          </NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? "media__link media__active" : "media__link"
          } to={"/media/audio"}>
            <li className="media__item">Audio</li>
          </NavLink>
        </ul>
      </section>
      <Routes>
        <Route path="/" element={<MobileVideoN />} />
        <Route path="/media/audio" element={<MobileAudioN />} />
      </Routes>

    </>
  )
}