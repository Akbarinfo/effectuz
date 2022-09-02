import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GET from "../../../API/GET";

export default function InformerItem() {

  let {id} = useParams()

  let [data, setData] = useState([])

  const infoUser = async () => {
    try{
      const data = await GET.reporter(id)
      setData(data.data)
    }catch(err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    infoUser()
  }, [])

  return(
    <section className="informer">
      <div className="informer__left">
        <div className="informer__imgbox">
          <img className="informer__img" src={data.img} alt="avatar" />
        </div>
        <h3 className="informer__name">{data.fullName}</h3>
        <ul className="informer__list">
          <li className="informer__item"><a className="informer__link" href="/" target="_blank"><i className='bx bxl-telegram'></i></a></li>
          <li className="informer__item"><a className="informer__link" href="/" target="_blank"><i className='bx bxl-facebook'></i></a></li>
          <li className="informer__item"><a className="informer__link" href="/" target="_blank"><i className='bx bxl-twitter'></i></a></li>
        </ul>
      </div>

      <div className="informer__right">
        <p className="informer__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sed vulputate varius eget libero odio. Et amet aenean phasellus massa. Lobortis egestas arcu suspendisse cursus ac. Laoreet morbi nunc pharetra risus.</p>
        <p className="informer__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sed vulputate varius eget libero odio. Et amet aenean phasellus massa. Lobortis egestas arcu suspendisse cursus ac. Laoreet morbi nunc pharetra risus.</p>
        <p className="informer__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum sed vulputate varius eget libero odio. Et amet aenean phasellus massa. Lobortis egestas arcu suspendisse cursus ac. Laoreet morbi nunc pharetra risus.</p>

        <div className="informer__box">
          <p className="informer__text">Maqolalar: <span>{data.news_count}</span></p>
          <p className="informer__text">Baholangan: <span>1605</span></p>
          <p className="informer__text">Reyting: <span>3.5</span></p>
        </div>
      </div>
    </section>
  )
}