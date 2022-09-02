import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GET from "../../../API/GET";

//translation
import "../../../i18next"
import { useTranslation } from "react-i18next";

// style
import './MobileRukn.scss'

export default function MobileRukn() {

  const {t, i18n} = useTranslation()

  let [data, setData] = useState([])

  const useCategory = async () => {
    try {
      const category = await GET.category()
      setData(category.data)
    } catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    useCategory()
  }, [])

  return (
    <section className="mrukn">
      <div className="mrukn__main">
        <h2 className="mrukn__title">Ruknlar</h2>
        <ul className="mrukn__list">

          {
            data.map((item, key) => {
              console.log(item)
              return (
                <li key={key+203} className="mrukn__item">
                  <Link className="mrukn__link" to={`/rukunlar/${item.id}`}>{i18n.language === "uz" ? item.name_uz : i18n.language === "ru" ? item.name_ru : i18n.language === "kiril" ? item.name_oz : item.name_uz}</Link>
                </li>
              )
            })}

        </ul>
      </div>
    </section>
  )
}