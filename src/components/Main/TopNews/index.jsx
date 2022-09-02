import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GET from "../../../API/GET";

// style
import './topnews.scss'

//translation
import "../../../i18next"
import { useTranslation } from "react-i18next";

export default function TopNews() {

  const { t, i18n } = useTranslation()

  const [data, setData] = useState([])

  const newsItem = async () => {
    try {
      const response = await GET.news_all();
      setData(response.data.items.slice(0, 6))
    } catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    newsItem()
  }, [])

  return (
    <section className="topnews">
      <ul className="topnews__list">
        {
          data.map((item, key) => {
            return (
              <li key={key + 54} className="topnews__item">
                <Link className="d-flex" to={`/post/${item.id}`}>
                  <div className="topnews__catebox">
                    <h4 className="topnews__category">{item.category_id}</h4>
                  </div>
                  <div className="topnews__box">
                    <h2 className="topnews__title">{item.title_uz.slice(0, 63)}...</h2>
                    <div className="topnews__timebox">
                      <span className="topnews__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> {item.created_date} </span>
                      <span className="topnews__time"></span>
                      {item.comment_count === 0 ? "" : <span><i className='bx bx-message-rounded bx-flip-horizontal'></i> {item.comment_count} {t('izoh')}</span>}
                    </div>
                  </div>
                  <div className="topnews__imgbox">
                    <img className="topnews__img" src={item.default_img} alt="rasm" />
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <div className="topnews__btnbox">
        <button className="topnews__btn">{t("barcha")}</button>
      </div>
    </section>
  )
}