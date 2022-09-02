import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import GET from "../../../API/GET";
import '../../../i18next'


export default function RukunItems() {
  let {id} = useParams()

  const { t, i18n } = useTranslation()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const newsItem = async () => {
    try{
      setLoading(false)
      const response = await GET.news_category(id);
      setData(response.data.items.slice(0, 10))
      setLoading(true)
    }catch(err) {
      console.log(err)
      return
    }
  }

  useEffect(()=> {
    newsItem()
  },[id])

  if(! loading) {
    return <h1>Loading</h1>
  }

  return (
    <section className="newslenta">
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
                <li key={key+364} className="newslenta__item">
                  <span className="newslenta__time">19:35</span>
                  <Link to="/">
                    <div className="newslenta__box">
                      <div className="newslenta__imgbox">
                        <img className="newslenta__img" src={item.default_img} alt="img" />
                      </div>
                      <div className="newslenta__titlebox">
                        <h3 className="newslenta__title">{i18n.language === "uz" ? item.title_uz : i18n.language === "ru" ? item.title_ru : i18n.language === "kiril" ? item.title_oz : item.title_uz}</h3>
                        <div className="newslenta__catebox">
                          <p>#{item.category_id}</p>
                          <p ><i className='newslenta__comment bx bx-message-rounded bx-flip-horizontal'></i>{item.comment_count} izoh</p>
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
          <button className="newslenta__btn">Yana yuklash</button>
        </div>
      </div>
    </section>
  )
}