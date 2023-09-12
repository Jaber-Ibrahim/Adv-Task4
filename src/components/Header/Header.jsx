/* eslint-disable react/prop-types */
import "./Header.css"
import {AiOutlineMail , AiOutlineQuestionCircle , AiOutlinePhone , AiFillLock} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {PrimaryButton} from './../import';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState , useEffect } from "react";

const Header = () => {

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 200)
    })
  }, [])

  
  return (
    <nav className={scroll ? "scroll" : ""}>
      <div className="top_header">
        <div className="top_header_connect_info">
          <span className="connect_info_span"><AiOutlineQuestionCircle className="header_icon"/>have a question ?</span>
          <span className="connect_info_span"><AiOutlinePhone className="header_icon"/>09370937</span>
          <span className="connect_info_span"><AiOutlineMail className="header_icon"/>jaberebra@gmail.com</span>
        </div>
        <div className="top_header_sign_interface">
          <span className="sign_span"><AiFillLock className="header_icon"/> Log In </span>
          <span className="sign_span"><BsFillPersonFill className="header_icon"/> Register</span>
        </div>
      </div>
      <div className="bottom_header">
        <Link to="/" className="top_header_logo">learner</Link>
        <ul className="nav_ul"> 
        <CustomLink to = "/">Home</CustomLink>
        <CustomLink to = "/about">About</CustomLink>
        <CustomLink to = "/news">News</CustomLink>
        </ul>
        <PrimaryButton anchor = "enroll now"/>
      </div>
    </nav>
    )
}

export default Header


function CustomLink(props) {
  const resolvePath = useResolvedPath(props.to)
  const isActive = useMatch({path : resolvePath.pathname , end : true})
  return (
    <li className="nav_ul_li">
    <Link to={props.to} className={isActive ? "nav_ul_li_a active" : "nav_ul_li_a"}>{props.children}</Link>
    </li>
  )
}