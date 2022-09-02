import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import POST from "../../API/POST";
import '../../i18next'
// style
import './newslenta.scss'

export default function NewsL() {

  const { t, i18n } = useTranslation()

  const [data, setData] = useState([])

  let params = {
    count: 10
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

  return (
      <section className="newslenta">
        <h2 className="newslenta__subtitle">{t('Yangi-lentasi')}</h2>
        <div className="newslenta__bigbox">
          <div className="newslenta__date">
            <span className="newslenta__hr"></span>
            <p>22.07.2022</p>
            <span className="newslenta__hr"></span>
          </div>

          <ul className="newslenta__list">
            {
              data.map((item, key) => {
                return (
                  <li key={key+366} className="newslenta__item">
                    <span className="newslenta__time">19:35</span>
                    <Link to={`/post/${item.id}`}>
                      <div className="newslenta__box">
                        <div className="newslenta__imgbox">
                          <img className="newslenta__img" src={item.default_img} alt="img" />
                        </div>
                        <div className="newslenta__titlebox">
                          <h3 className="newslenta__title">{i18n.language === "uz" ? item.title_uz : i18n.language === "ru" ? item.title_ru : i18n.language === "kiril" ? item.title_oz : item.title_uz}</h3>
                          <div className="newslenta__catebox">
                            <p>#{item.category_id}</p>
                            <p ><i className='newslenta__comment bx bx-message-rounded bx-flip-horizontal'></i>{item.comment_count} {t ("izoh")}</p>
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
            <button className="newslenta__btn">{t ("yana-yuklash")}</button>
          </div>
        </div>
      </section>
  )
}