import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import POST from "../../../API/POST";
import '../../../i18next'

export default function NewsItem() {

  let {t, i18n} = useTranslation()

  const [data, setData] = useState([])

  let params = {
    count: 4
  }

  const newsItem = async () => {
    try{
      const response = await POST.news_item(params);
      setData(response.data.items.slice(0, params.count))
    }catch(err) {
      console.log(err)
      return
    }
  }


  useEffect(()=> {
    newsItem()
  },[])

  return(
    <>
      {
        data.map((item, key) => {
          return(
            <li key={key+123} className="news__item">
              <Link className="d-flex" to={`/post/${item.id}`}>
                <div className="news__list-box">
                  <div className="news__list-time">
                    <i className='bx bxs-calendar-alt' ></i>
                    {/* <span className="news__list-line"></span>  */}
                    {item.created_date}
                  </div>
                  <h4 className="news__list-title">{i18n.language === "uz" ? item.title_uz.slice(0, 43) : i18n.language === "ru" ? item.title_ru.slice(0, 43) : i18n.language === "kiril" ? item.title_oz.slice(0, 43) : item.title_uz.slice(0, 43)}...</h4>
                </div>
                <div className="news__list-imgbox">
                  <img className="news__list-img" src={item.default_img} alt="news" />
                </div>
              </Link>
            </li>
          )
        })
      }
    </>
  )
}