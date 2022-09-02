import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import GET from "../../../API/GET";
import '../../../i18next'

export default function MobileSearch() {

  let { t, i18n } = useTranslation()

  let [data, setData] = useState([])

  let a = ["", "", "", "", "", "", "", "", "", ""]

  const searchItem = async () => {
    const response = await GET.news_search("AQSH")
    setData(response)
  }

  return (
    <div className="mheader__border offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

      <div className="offcanvas-header">
        <h5 className=""></h5>
        <button type="button" className="mheader__xbtn" data-bs-dismiss="offcanvas" aria-label="Close">
          <i className='bx bx-x'></i>
        </button>
      </div>

      <div className="mheader__searchbox">
        <form className="mheader__form">
          <input className="mheader__input" type="text" placeholder={t('izlash')} />
          <button className="mheader__send" type="button"><i className='bx bx-search'></i></button>
        </form>
      </div>
      {a.length > 0 ? <h2 className="mheader__result">
      {t ("qidiruv")}</h2> : "" }
      <ul className="mheader__slist">
        {
          a.map((item, key) => {
            return (
              <li key={key+359} className="mheader__sitem">
                <Link className="d-flex" to={`post/`}>
                  <div className="mheader__slist-imgbox">
                    <img className="mheader__slist-img" src="https://picsum.photos/id/34/79/78" alt="news" />
                  </div>
                  <div className="mheader__slist-box">
                    <div className="mheader__slist-time">
                      <i className='bx bxs-calendar-alt'></i>
                      {`item.created_date`}
                    </div>
                    <h4 className="mheader__slist-title">Snickers Tayvanni mamlakat deb atagani uchun Xitoydan uzr so‘radi...</h4>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}



// {i18n.language === "uz" ? item.title_uz.slice(0, 43) : i18n.language === "ru" ? item.title_ru.slice(0, 43) : i18n.language === "kiril" ? item.title_oz.slice(0, 43) : item.title_uz.slice(0, 43)}