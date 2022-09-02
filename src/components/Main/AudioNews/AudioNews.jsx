import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import GET from "../../../API/GET";
import '../../../i18next'

export default function AudioN() {

  const { t, i18n } = useTranslation()
  const [data, setData] = useState([])
  const [onemp3, setOne_mp3] = useState([])
  const [audioId, setAudioId] = useState(0)

  const newsItem = async () => {
    try {
      const allmp3 = await GET.voices();
      setData(allmp3.data.items)
      const response = await GET.voice_one(allmp3.data.items.length);
      setOne_mp3(response.data)
    } catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    newsItem()
  }, [])


  // Plyer uchun
  let audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState({ current: 0, duration: 0 })

  const timeHandler = (e) => {
    let current = e.target.currentTime
    let duration = e.target.duration
    setTime({ ...time, current, duration })
  }

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setTime({ ...time, current: e.target.value })
  }

  const volumeHandler = (e) => {
    audioRef.current.volume = e.target.value / 100
  }

  const play = () => {
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!playing)
  }


  const oneItem = async (id, key) => {
    try {
      setAudioId(key)
      const response = await GET.voice_one(id);
      setOne_mp3(response.data)
      setTimeout(() => {
        audioRef.current.play()
        setPlaying(true)
      }, [1000])

    } catch (err) {
      console.log(err)
      return
    }
  }

  const prevHandler = async () => {
    try {
      const response = await GET.voice_one(data[audioId - 1].id);
      setOne_mp3(response.data)
      setTimeout(() => {
        audioRef.current.play()
        setPlaying(true)
      }, [1000])
      setAudioId(audioId - 1)
    } catch (err) {
      console.log(err)
      return
    }
  }

  const nextHandler = async () => {
    try {
      const response = await GET.voice_one(data[audioId + 1].id);
      setOne_mp3(response.data)
      setTimeout(() => {
        audioRef.current.play()
        setPlaying(true)
      }, [1000])
      setAudioId(audioId + 1)
    } catch (err) {
      console.log(err)
      return
    }
  }

  return (
    <section className="audionews">
      <h2 className="audionews__title">{t("Audio-xabar")}</h2>

      <div className="audionews__bigbox">
        <h3 className="audionews__name">{i18n.language === "uz" ? onemp3.title_uz : i18n.language === "ru" ? onemp3.title_ru : i18n.language === "kiril" ? onemp3.title_oz : onemp3.title_uz}</h3>
        <div className="audionews__box">
          <button onClick={prevHandler} disabled={audioId === 0 ? true : ""} className="audionews__btn"><i className='bx bx-chevron-left'></i></button>
          <button onClick={play} className="audionews__playbtn"> {!playing ? <i className='bx bx-play'></i> : <i className='bx bx-pause'></i>}</button>
          <button onClick={nextHandler} disabled={data.length -1 === audioId ? true : ""} className="audionews__btn"><i className='bx bx-chevron-right'></i></button>
          <span className="audionews__time">{getTime(time.current)} / {getTime(time.duration)}</span>

          <input
            className="audionews__range"
            type="range"
            onChange={dragHandler}
            value={time.current}
            max={+time.duration}
          />

          <input className="audionews__volume" defaultValue={100} type="range" onChange={volumeHandler} />
          <audio
            onTimeUpdate={timeHandler}
            onLoadedMetadata={timeHandler}
            src={onemp3.voice}
            ref={audioRef}
          >
          </audio>
        </div>
      </div>

      <ul className="audionews__list">
        {
          data.map((item, key) => {
            return (
              <li typeof="button" onClick={() => oneItem(item.id, key)} key={key + 549} className={`audionews__item ${onemp3.id === item.id ? "audionews__active" : ''}`}>
                <div className="audionews__imgbox">
                  <img className="audionews__img" src={item.img} alt="img" />
                </div>
                <div className="audionews__right">
                  <h3 className="audionews__subtitle">{i18n.language === "uz" ? item.title_uz : i18n.language === "ru" ? item.title_ru : i18n.language === "kiril" ? item.title_oz : item.title_uz}</h3>
                  <div className="audionews__flex">
                    <span className="audionews__date"><i className='bx bxs-calendar-event bx-flip-horizontal'></i> {item.created_date}</span>
                    <span className="audionews__onemp3">{item.onemp3_id}</span>
                  </div>
                </div>
              </li>
            )
          })
        }
      <div className="text-center">
        <button className="newslenta__btn">Yana yuklash</button>
      </div>
      </ul>
    </section>
  )
}