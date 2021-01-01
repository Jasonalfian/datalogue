import React from "react"
import {
  FaLine,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLine className="social-icon"></FaLine>,
    url: "https://line.me/ti/p/~@kmitb",
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/km_itb",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/km.itb/",
  },
  {
    id: 4,
    icon: <FaYoutubeSquare className="social-icon"></FaYoutubeSquare>,
    url: "https://www.youtube.com/user/kominfokmitb",
  },
  {
    id: 5,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: " https://www.linkedin.com/company/kabinetkmitb/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <div className={`social-links ${styleClass ? styleClass : ""}`}>
      {links}
    </div>
  )
}
