import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
// style
import "./mvideoitem.scss"

export default function MobileVideo() {

  let a = ["", "", "", "", "", "","",]

  return (
    <section className="mvideonews">
      <h2 className="mvideonews__title">Video Yangiliklar</h2>

      <Splide className="mvideonews__list"
        options={{
          perPage: 1.5,
          perMove: 1,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: 10
        }}>
          {
            a.map((item, key) => {
              return(
                <SplideSlide key={key+783} className="mvideonews__item">
                <Link className="mvideonews__link" to="/">
                  <div className="mvideonews__imgbox">
                    <img className="mvideonews__img" src="https://picsum.photos/id/16/213/141" alt="img" />
                    <span className="mvideonews__play">
                      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.08334 2.33325V11.6666L11.6667 6.99992L4.08334 2.33325Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <div className="mvideonews__box">
                    <p className="mvideonews__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> 13.07.2022</p>
                    <h3 className="mvideonews__subtitle">
                      "Манчестер Юнайтед" "Вулверхэмптон" ҳужумчиси Педру Нетуга қизиқмоқда.
                    </h3>
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