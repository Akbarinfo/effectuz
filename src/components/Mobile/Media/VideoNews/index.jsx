import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import GET from "../../../../API/GET";

// style
import './MobileVideo.scss'

export default function MobileVideoN() {

  const { t, i18n } = useTranslation()

  const [data, setData] = useState([])


  let params = {
    count: 10
  }

  const newsItem = async () => {
    try {
      const response = await GET.news_video();
      setData(response.data.slice(0, params.count))
    } catch (err) {
      console.log(err)
      return
    }
  }


  useEffect(() => {
    newsItem()
  }, [])
  return (
    <section className="mvideon">
      <ul className="mvideon__list">
        {
          data.map((item, key) => {
            return (
              <li key={key + 206} className="mvideon__item">
                <Link to={`/post/${item.id}`}>
                  <div className="mvideon__imgbox">
                    <img className="mvideon__img" src={item.default_img} alt="img" />
                    <span className="mvideon__play"><svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_71_3374)">
                        <path d="M3.61914 2.16621V9.89132L9.90025 6.02876L3.61914 2.16621Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_71_3374">
                          <rect width="13.5959" height="13.5877" fill="white" transform="translate(0.237 0.234924)" />
                        </clipPath>
                      </defs>
                    </svg></span>
                  </div>
                  <h2 className="mvideon__title">{item.title_uz}</h2>
                </Link>
              </li>

            )
          })
        }
      </ul>
    </section>
  )
}
