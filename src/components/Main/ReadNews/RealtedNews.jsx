import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../../i18next'

// style
import './realtednews.scss'

export default function RealtedNews() {

  let {t, i18n} = useTranslation()


  let a = ["", "", "", "", "", "", "", "", "",]

  return (
    <section className="realted">
      <h2 className="realted__title">{t ("Mavzuga-oid")}</h2>
      <Splide className="realted__list"
        options={{
          perPage: 4,
          perMove: 1,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: 30
        }}>
        {
          a.map((item, key) => {
            return (
              <SplideSlide key={key+569} className="realted__item">
                <Link className="realted__link" to="/">
                  <div className="realted__imgbox">
                    <img className="realted__img" src="https://picsum.photos/id/48/318/184" alt="asc" />
                  </div>
                  <div className="realted__box">
                    <div className="realted__flex">
                      <p>#siyosat</p>
                      <p><i className='bx bxs-calendar-event bx-flip-horizontal'></i> 20.07.2022</p>
                    </div>
                    <h3 className="realted__subtitle">The 10 Coolest Wearable Tech Gadgets Of 2021 (So Far)</h3>
                  </div>
                </Link>
              </SplideSlide>
            )
          })
        }

      </Splide>

    </section>
  )
}