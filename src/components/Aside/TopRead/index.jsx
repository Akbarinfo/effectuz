import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import GET from "../../../API/GET";
import '../../../i18next'
// style
import './topread.scss'

export default function TopRead() {
  let [data, setData] = useState([])
  const {t, i18n} = useTranslation()

  const topread = async () => {
    const response = await GET.news_top_10()
    setData(response.data)
  }

  useEffect(() => {
    topread()
  }, [data])

  return (
    <ul className="topread">
      <h2 className="topread__title"><i className='bx bx-file' ></i>  {t ("eng_kop")}</h2>
      {
        data.map((item, key) => {
          return (
            <li key={key+134} className="topread__item">
              <Link to={`/post/${item.id}`}>
                <p className="topread__time"><i className='bx bx-calendar-event bx-flip-horizontal'></i> {item.created_date}</p>
                <h3 className="topread__subtitle">{i18n.language === "uz" ? item.title_uz : i18n.language === "ru" ? item.title_ru : i18n.language === "kiril" ? item.title_oz : item.title_uz}</h3>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}