import "./SchoolCard.css"
import {SlCalender} from "react-icons/sl"
import {BsFillPersonFill} from "react-icons/bs"

const SchoolCard = (props) => {
  return (
    <div className="SchoolCard">
        <div className="SchoolCard_left">
            <img className="SchoolCard_left_img" src={props.img} alt="" />
        </div>
        <div className="SchoolCard_right">
            <h1 className="SchoolCard_right_h1">{props.cardTitle}</h1>
            <span className="SchoolCard_right_span"><SlCalender className="SchoolCard_right_span_icon"/> {props.date} <BsFillPersonFill className="SchoolCard_right_span_icon"/> admin</span>
            <p className="SchoolCard_right_p">{props.desc}</p>
            <span className="SchoolCard_right_more">learn more</span>
        </div>
    </div>
  )
}

export default SchoolCard