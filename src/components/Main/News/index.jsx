import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import POST from "../../../API/POST";
import '../../../i18next'

// style
import './news.scss'
import NewsItem from "./NewsItem";
import loadings from '../../../assets/images/loading.svg'

export default function News() {

  let { t, i18n } = useTranslation()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const newsItem = async () => {
    try {
      setLoading(false)
      const response = await POST.news_item(1);
      setData(...response.data.items.slice(0, 1))
      setLoading(true)
    } catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    newsItem()
  }, [])

  if(!loading) {
    return <section className="news"><img className="loading" src={loadings} alt="laoding" width="150" height={150}/></section>
  }

  return (
    <section className="news">
      <Link to={`/post/${data.id}`}>
        <div className="news__left">
          <div className="news__imgbox">
            <img className="news__img" src={data.default_img} alt="news" />
          </div>
          <div className="news__left-flex">
            <div className="news__left-category">
              <i className='bx bx-crosshair'></i>
              {data.category_id}
            </div>
            <div className="news__left-time">
              <i className='bx bx-time-five'></i>
              {/* <span className="news__dot"></span> */}
              {data.created_date}
            </div>
          </div>
          <h3 className="news__title">{i18n.language === "uz" ? data.title_uz : i18n.language === "ru" ? data.title_ru : i18n.language === "kiril" ? data.title_oz : data.title_uz}</h3>
          <p className="news__desc">{i18n.language === "uz" ? data.description_uz.slice(0, 80) : i18n.language === "ru" ? data.description_ru.slice(0, 80) : i18n.language === "kiril" ? data.description_oz.slice(0, 80) : data.description_uz.slice(0, 80)} ...</p>

          <div className="news__aside">
            <i className='bx bx-gift' ></i>
            {t ("aside")}
          </div>

        </div>
      </Link>
      <ul className="news__list">
        <NewsItem />
      </ul>
    </section>
  )
}