
import { BsBook } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const CourseCard = (props) => {
  return (
    <div className="Courses_section_card">
    <img className="Courses_section_card_img" src={props.img} alt="" />
    <div className="Courses_section_card_info">
        <span className="Courses_section_card_info_num"><BsBook className="Courses_section_card_info_icon"/>{props.num} lessons</span>
        <span className="Courses_section_card_info_rate"><AiFillStar className="Courses_section_card_info_icon"/>{props.rate}</span>
    </div>
    <div className="Courses_section_card_title">{props.title}</div>
    <div className="Courses_section_card_desc">{props.desc}</div>
    <div className="Courses_section_card_tail">
        <span className="Courses_section_card_price">$ {props.price} </span>
        <span className="Courses_section_card_more">learn more</span>
    </div>
</div>
  )
}

export default CourseCard