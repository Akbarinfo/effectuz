import React from "react";

// style
import './footer.scss'

// images
import logo from '../../assets/icons/logo.svg'
import { Link } from "react-router-dom";
import gplay from '../../assets/icons/footer/google-play.svg'
import appStore from '../../assets/icons/footer/app-store.svg'
import windowStore from '../../assets/icons/footer/window-store.svg'

//translation
import "../../i18next"
import { useTranslation } from "react-i18next";

export default function Footer() {

  let a = "+998937132313"
  const { t, i18n } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer__logobox">
        <Link to="/"><img className="footer__logo" src={logo} alt="logo" /></Link>
      </div>

      <div className="footer__bigbox">
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <ul className="footer__list">
                <li className="footer__item">Foydali sahifalar</li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Yangiliklar lentasi</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Foto-yangiliklar</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Video-yangiliklar</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Content</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Integrations</Link>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <ul className="footer__list">
                <li className="footer__item">Ruknlar</li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Siyosat</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Texnologiya</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Sport</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Website Builder</Link>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <ul className="footer__list">
                <li className="footer__item">Hududlar</li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">{t('qoraqalpoq')}</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">{t('toshkent')}</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">{t('andijon')}</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">{t('buxora')}</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">{t('jizzax')}</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">{t('qashqadaryo')}</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">{t('navoiy')}</Link>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <ul className="footer__list">
                <li className="footer__item">Biz haqimizda</li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">About Us</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Careers</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Ko'p so'raladigan savollar</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Jamoa</Link>
                </li>
                <li className="footer__item">
                  <Link className="footer__nav-link" to="/">Bo'sh ish o'rni</Link>
                </li>
              </ul>
            </li>
          </ul>
          <p className="footer__copyright">
            «EFFECT.UZ» интернет-нашри 2019 йилнинг 1 ноябрь куни электрон ОAВ сифатида Ўзбекистон Республикаси Президенти Aдминстрацияси ҳузуридаги Aхборот ва оммавий коммуникациялар агентлигида рўйхатдан ўтказилган. Гувоҳнома рақами: 1323. Муассис: «EFFECTUZBEK» МЧЖ Сайт раҳбари: Aкмалхон Эшонхонов Электрон манзил: <a href="mailto: www.effect.uz@gmail.com">www.effect.uz@gmail.com</a> Таҳририят манзили: 100016, Тошкент шаҳри, Яшнобод тумани, Маҳтумқули кўчаси 26-уй. EFFECT.UZ сайтида эълон қилинган материаллардан нусха кўчириш, тарқатиш ва бошқа шаклларда фойдаланиш фақат таҳририят раҳбариятининг ёзма розилиги билан амалга оширилади.
          </p>
        </nav>

        <div className="footer__box">
          <div className="footer__ebox">

            <p className="footer__us">Contact Us</p>
            <div className="footer__addressbox">
              <i className='bx bx-location-plus'></i>
              <p className="footer__address">Ташкент, тупик Фурката, 69 Оф. 7</p>
            </div>
            <div className="footer__addressbox">
              <i className='bx bx-envelope'></i>
              <a className="footer__link" href="mailto: www.effect.uz@gmail.com">www.effect.uz@gmail.com</a>
            </div>
            <button className="footer__btn">Subscribe</button>
            <p className="footer__follow">Follow Us</p>
            <ul className="footer__slist">
              <li className="footer__sitem">
                <a className="footer__slink" href="/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook' ></i></a>
              </li>
              <li className="footer__sitem">
                <a className="footer__slink" href="/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-telegram' ></i></a>
              </li>
              <li className="footer__sitem">
                <a className="footer__slink" href="/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram' ></i></a>
              </li>
              <li className="footer__sitem">
                <a className="footer__slink" href="/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube' ></i></a>
              </li>
            </ul>
            <hr className="foooter__hr" />
          </div>

          <ul className="footer__plist">
            <li className="footer__pitem">
              <a href="/" target="_blank">
                <img className="footer__pimg" src={gplay} alt="Googel-Play" />
              </a>
            </li>
            <li className="footer__pitem">
              <a href="/" target="_blank">
                <img className="footer__pimg" src={appStore} alt="App-Store" />
              </a>
            </li>
            <li className="footer__pitem">
              <a href="/" target="_blank">
                <img className="footer__pimg" src={windowStore} alt="Window-Store" />
              </a>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  )
}