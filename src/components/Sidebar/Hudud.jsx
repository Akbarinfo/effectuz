import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GET from "../../API/GET";

//translation
import "../../i18next"
import { useTranslation } from "react-i18next";

export default function Hudud() {

  const { t, i18n } = useTranslation()

  const [data, setData] = useState([])

  const useCategory = async () => {
    try {
      const provence = await GET.provence()
      setData(provence.data)
    } catch (err) {
      console.log(err)
      return
    }
  }

  useEffect(() => {
    useCategory()
  }, [])

  return (
    <ul className="sidebar__list collapse" id="panelsStayOpen-collapseTwo" aria-labelledby="panelsStayOpen-headingTwo">
      {
        data.map((item, key) => {
          return (
            <NavLink key={key + 531} to={`/hududlar/${item.id}`} className={({ isActive }) =>
              isActive ? "sidebar__link sidebar__link-active" : "sidebar__link"
            }>
              <li className="sidebar__item">
                <span className="sidebar__line"></span>
                {item.name}
              </li>
            </NavLink>
          )
        })
      }
    </ul>
  )
}