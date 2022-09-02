import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../../i18next'

export default function SearchItem() {

  let {t, i18n} = useTranslation()

  let a = ["","","","","","","",""]

  return (
    <section className="newslenta">
      <h2 className="newslenta__subtitle">{t('qidiruv')}</h2>
      <div className="newslenta__bigbox">
        <ul className="newslenta__list">
          {
            a.map((item, key) => {
              return (
                <li key={key + 366} className="newslenta__item">
                  <span className="newslenta__time">19:35</span>
                  <Link to={`/post/`}>
                    <div className="newslenta__box">
                      <div className="newslenta__imgbox">
                        <img className="newslenta__img" src="https://picsum.photos/id/35/134/132" alt="img" />
                      </div>
                      <div className="newslenta__titlebox">
                        <h3 className="newslenta__title">Snickers Tayvanni mamlakat deb atagani uchun Xitoydan uzr so‘radi</h3>
                        <div className="newslenta__catebox">
                          <p>#Texnologiya</p>
                          <p ><i className='newslenta__comment bx bx-message-rounded bx-flip-horizontal'></i>18{t("izoh")}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <div className="text-center">
          <button className="newslenta__btn">{t("yana-yuklash")}</button>
        </div>
      </div>
    </section>
  )
}


// {i18n.language === "uz" ? item.title_uz : i18n.language === "ru" ? item.title_ru : i18n.language === "kiril" ? item.title_oz : item.title_uz}

// {item.comment_count}

// {item.category_id}