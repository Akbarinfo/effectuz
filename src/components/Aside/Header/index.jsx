import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GET from "../../../API/GET";

// style
import './asideHeader.scss'

// images
import facebooks from '../../../assets/icons/icons8-facebook.svg'
import twitters from '../../../assets/icons/icons8-twitter-circled.svg'
import instagrams from '../../../assets/icons/icons8-instagram.svg'
import youtubes from '../../../assets/icons/icons8-youtube.svg'
import telegrams from '../../../assets/icons/icons8-telegram-app.svg'

export default function AsideHeader() {

  let { id } = useParams()
  let [data, setData] = useState([])

  const newItem = async () => {
    try {
      const response = await GET.config();
      setData(response.data)

    } catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    newItem()
  }, [])

  return (
    <>
      <ul className="aside__blist">
        <li className="aside__bitem"><a href="#" target="_blank"><img src={facebooks} alt="facebook" width="40" height="40" /></a></li>
        <li className="aside__bitem"><a href={`https://twitter.com/${ typeof(data) !== "undefined" ? data.twitter : "/"}`} target="_blank"><img src={twitters} alt="twitter" width="40" height="40" /></a></li>
        <li className="aside__bitem"><a href={`https://instagram.com/${ typeof(data) !== "undefined" ? data.instagram : "/"}`} target="_blank"><img src={instagrams} alt="intagram" width="40" height="40" /></a></li>
        <li className="aside__bitem"><a href="http://" target="_blank"><img src={youtubes} alt="youtube" width="40" height="40" /></a></li>
        <li className="aside__bitem"><a href={`https://t.me/${ typeof(data) !== "undefined" ? data.telegram : "/"}`} target="_blank"><img src={telegrams} alt="telegram" width="40" height="40" /></a></li>

      </ul>
    </>
  )
}