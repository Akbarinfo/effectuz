import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GET from "../../API/GET"
// style
import './videonews.scss'


//translation
import "../../i18next"
import { useTranslation } from "react-i18next";

// images
import play from '../../assets/icons/video-play.svg'

export default function VideoNews() {

  const { t, i18n } = useTranslation()

  const [data, setData] = useState([])
  const [one, setOne] = useState([])
  const [video, setVideo] = useState(false)

  let params = {
    count: 5
  }

  const newsItem = async () => {
    try {
      const response = await GET.news_video();
      setData(response.data.slice(0, params.count))
      setOne(...response.data.slice(0, 1))
    } catch (err) {
      console.log(err)
      return
    }
  }


  useEffect(() => {
    newsItem()
  }, [])

  return (
    <section className="videonews">
      <h2 className="videonews__title">{t('vdyangi')}</h2>
      <div className="videonews__box">
        <div className="videonews__videobox">
          {video === false ? <span><img className="videonews__bigimg" src={one.default_img} alt="ascas" />
            <span onClick={() => setVideo(!video)} className="videonews__play"><img className="videonews__play-icon" src={play} alt="cbc" /></span>
            <div className="videonews__titlebox">
              <h3 className="videonews__subtitle">{one.title_uz}</h3>
            </div></span> : <iframe className="videonews__bigimg" src={`https://www.youtube.com/embed/${one.video_url}?autoplay=1`} allow="autoplay">
          </iframe>}
        </div>

        <div>
          <ul className="videonews__list">
            {
              data.map((item, key) => {
                return (
                  <li key={key + 258} className="videonews__item">
                    <Link className="d-flex" to={`/post/${item.id}`}>
                      <div className="videonews__imgbox">
                        <img className="videonews__img" src={item.default_img} alt="dsvs" />
                        <span className="videonews__list-play"><svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_71_3374)">
                            <path d="M3.61914 2.16621V9.89132L9.90025 6.02876L3.61914 2.16621Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_71_3374">
                              <rect width="11.5959" height="11.5877" fill="white" transform="translate(0.237 0.234924)" />
                            </clipPath>
                          </defs>
                        </svg>
                        </span>
                      </div>
                      <div className="videonews__list-box">
                        <p className="videonews__time"><i className='bx bx-time-five'></i> {item.created_date}</p>
                        <h4 className="videonews__list-title">{item.title_uz.slice(0, 52)}...</h4>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <Link className="videonews__link" to="/">{t('otish')} <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_71_3435)">
              <path d="M5.81122 13.337H20.5696" stroke="#072D4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.353 17.5507L20.5697 13.337" stroke="#072D4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.353 9.12329L20.5697 13.337" stroke="#072D4B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_71_3435">
                <rect width="25.3001" height="25.2822" fill="white" transform="translate(0.540344 0.695923)" />
              </clipPath>
            </defs>
          </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}