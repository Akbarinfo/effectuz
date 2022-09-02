import React, { useEffect, useState } from "react";
import GET from "../../../API/GET";

//translation
import "../../../i18next"
import { useTranslation } from "react-i18next";

// style
import '../Rukn/MobileRukn.scss'
import { Link } from "react-router-dom";

export default function MobileHudud() {

  const { t, i18n } = useTranslation()

  const [data, setData] = useState([])

  const useCategory = async () => {
    try {
      const provence = await GET.provence()
      setData(provence.data)
    } catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    useCategory()
  }, [])

  return(
    <section className="mrukn">
    <div className="mrukn__main">
      <h2 className="mrukn__title">{t('Hudud')}</h2>
      <ul className="mrukn__list">

        {
          data.map((item, key) => {
            console.log(item)
            return (
              <li key={key+204} className="mrukn__item">
                <Link className="mrukn__link" to={`/hududlar/${item.id}`}>{item.name}</Link>
              </li>
            )
          })}

      </ul>
    </div>
  </section>
  )
}