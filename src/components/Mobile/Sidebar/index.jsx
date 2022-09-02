import React from "react";
import { NavLink } from "react-router-dom";

// style
import './mobilesidebar.scss'

export default function MobileSidebar() {

  return (
    <section className="msidebar">
      <ul className="msidebar__list">

        <NavLink to="/" className={({ isActive }) =>
          isActive ? "msidebar__active" : ""
        }>
          <li className="msidebar__item">
            <svg className="msidebar__icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#666666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 22V12H15V22" stroke="#666666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Asosiy
          </li>
        </NavLink>

        <NavLink to="/newslenta" className={({ isActive }) =>
          isActive ? "msidebar__active" : ""
        }>
          <li className="msidebar__item">
            <svg className="msidebar__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H13V17H8V15Z" fill="#666666" />
            </svg>
            Lenta
          </li>
        </NavLink>

        <NavLink to="/rukn" className={({ isActive }) =>
          isActive ? "msidebar__active" : ""}>
          <li className="msidebar__item">
            <svg className="msidebar__icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z" stroke="#666666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z" stroke="#666666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z" stroke="#666666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 17H20M17 14V20" stroke="#666666" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Rukn
          </li>
        </NavLink>

        <NavLink to="/hudud" className={({ isActive }) =>
          isActive ? "msidebar__active" : ""
        }>
          <li className="msidebar__item">
            <i className="msidebar__icon bx bx-globe"></i>
            Hudud
          </li>
        </NavLink>

        <NavLink to="/media" className={({ isActive }) =>
          isActive ? "msidebar__active" : ""
        }>
          <li className="msidebar__item">
            <svg className="msidebar__icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20H20V22H12C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22.0032 14.1642 21.3011 16.2705 20 18H17.292C18.6963 16.7616 19.6217 15.0698 19.907 13.2193C20.1924 11.3689 19.8197 9.47692 18.8538 7.87296C17.8879 6.26899 16.39 5.05463 14.6209 4.44134C12.8519 3.82805 10.9237 3.85468 9.1723 4.5166C7.42086 5.17852 5.95708 6.43379 5.03584 8.06382C4.1146 9.69385 3.79428 11.5954 4.13066 13.4372C4.46704 15.2791 5.4388 16.9447 6.87673 18.1439C8.31466 19.343 10.1277 19.9999 12 20ZM12 10C11.4696 10 10.9609 9.78929 10.5858 9.41421C10.2107 9.03914 10 8.53043 10 8C10 7.46957 10.2107 6.96086 10.5858 6.58579C10.9609 6.21071 11.4696 6 12 6C12.5304 6 13.0391 6.21071 13.4142 6.58579C13.7893 6.96086 14 7.46957 14 8C14 8.53043 13.7893 9.03914 13.4142 9.41421C13.0391 9.78929 12.5304 10 12 10ZM8 14C7.46957 14 6.96086 13.7893 6.58579 13.4142C6.21071 13.0391 6 12.5304 6 12C6 11.4696 6.21071 10.9609 6.58579 10.5858C6.96086 10.2107 7.46957 10 8 10C8.53043 10 9.03914 10.2107 9.41421 10.5858C9.78929 10.9609 10 11.4696 10 12C10 12.5304 9.78929 13.0391 9.41421 13.4142C9.03914 13.7893 8.53043 14 8 14ZM16 14C15.4696 14 14.9609 13.7893 14.5858 13.4142C14.2107 13.0391 14 12.5304 14 12C14 11.4696 14.2107 10.9609 14.5858 10.5858C14.9609 10.2107 15.4696 10 16 10C16.5304 10 17.0391 10.2107 17.4142 10.5858C17.7893 10.9609 18 11.4696 18 12C18 12.5304 17.7893 13.0391 17.4142 13.4142C17.0391 13.7893 16.5304 14 16 14ZM12 18C11.4696 18 10.9609 17.7893 10.5858 17.4142C10.2107 17.0391 10 16.5304 10 16C10 15.4696 10.2107 14.9609 10.5858 14.5858C10.9609 14.2107 11.4696 14 12 14C12.5304 14 13.0391 14.2107 13.4142 14.5858C13.7893 14.9609 14 15.4696 14 16C14 16.5304 13.7893 17.0391 13.4142 17.4142C13.0391 17.7893 12.5304 18 12 18Z" fill="#666666" />
            </svg>
            Media
          </li>
        </NavLink>
      </ul>
    </section>
  )
}