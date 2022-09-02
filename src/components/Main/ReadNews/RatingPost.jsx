import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import POST from "../../../API/POST";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../../../i18next'

// icons
import share_icon from '../../../assets/icons/share-icon.svg'

export default function RatingPost({news}) {

  let {t, i18n} = useTranslation()

  let {id} = useParams()
  const [star, setStar] = useState([])

  let stars = {
    star: star,
    new_id: id
  }

  const addStar = async () => {
    return await POST.star(stars)
  }

  return (
    <div className="readnews__ratingbox">
      <Link to={`/informer/${news.user_id}`} className="readnews__author">{news.user}</Link>
      <div className="readnews__rating">
        <div className="readnews__rating-left">
          <p><i>{t ("baho")}</i></p>
          <Stack spacing={1}>
            <Rating name="size-medium" defaultValue={1} onChange={(e) => setStar(e.target.value)} onClick={() => addStar()} />
          </Stack>
        </div>

        <div className="readnews__rating-right">
          <p className="readnews__rating-text">
          {t ("baholangan")}: <span>1605</span>
          </p>
          <p className="readnews__rating-text">
          {t ("reyting")}: <span>{news.stars === null ? "0" : news.stars}</span>
          </p>
        </div>
      </div>

      <div className="readnews__share">
        <div className="readnews__share-left">
          <p>{t ("ulashing")}</p>
          <a href={`https://telegram.me/share/url?url=${location}`} target="_blank" className="readnews__share-btns"><i className='readnews__tg bx bxl-telegram'></i></a>
          <a href={`https://www.facebook.com/sharer.php?u=${location}`} target="_blank" className="readnews__share-btns"><i className='readnews__fb bx bxl-facebook'></i></a>
          <a href={`https://twitter.com/intent/tweet?text=${location}`} target="_blank" className="readnews__share-btns"><i className='readnews__tw bx bxl-twitter'></i></a>
        </div>

        <div className="readnews__share-right">
          <input className="readnews__share-input" type="text" defaultValue={location} />
          <button onClick={() => {
            return (
              navigator.clipboard.writeText(location),
              toast.info("Nusxalandi", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            )
          }} className="readnews__share-btn"> <span className="readnews__share-copy">{t ("nusxa")}</span> <span className="readnews__share-icon"><img src={share_icon} alt="share_icon" /></span> </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}