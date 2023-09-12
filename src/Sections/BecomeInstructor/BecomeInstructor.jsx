import Title from './../../components/Title/Title';
import {AiOutlineCheck} from "react-icons/ai"
import "./BecomeInstructor.css"
import {PrimaryButton ,SecondaryButton} from './../../components/import';

const BecomeInstructor = (props) => {
  return (
    <div className="BecomeInstructor_section">
        <div className="container">
        <div className="BecomeInstructor_section_left">
            <Title title = {props.title} para = {props.desc}/>
            <span className="BecomeInstructor_section_span"><AiOutlineCheck className="BecomeInstructor_section_icon"/>{props.first}</span>
            <span className="BecomeInstructor_section_span"><AiOutlineCheck className="BecomeInstructor_section_icon"/>{props.second}</span>
            <span className="BecomeInstructor_section_span"><AiOutlineCheck className="BecomeInstructor_section_icon"/>{props.third}</span>
            <div className="BecomeInstructor_section_details">
              <div className='BecomeInstructor_section_details_col'>
              <span className="BecomeInstructor_section_details_span_num">{props.num1}</span>
              <span className="BecomeInstructor_section_details_span_stuff">{props.h1}</span>
              </div>
              <div className='BecomeInstructor_section_details_col'>
              <span className="BecomeInstructor_section_details_span_num">{props.num2}</span>
              <span className="BecomeInstructor_section_details_span_stuff">{props.h2}</span>
              </div>
              <div className='BecomeInstructor_section_details_col'>
              <span className="BecomeInstructor_section_details_span_num">{props.num3}</span>
              <span className="BecomeInstructor_section_details_span_stuff">{props.h3}</span>
              </div>
            </div>
            <div className="BecomeInstructor_section_left_buttons">
            <PrimaryButton anchor = {props.anchor}/>
            <SecondaryButton anchor2 = {props.anchor2}/>
            </div>
        </div>
        <div className="BecomeInstructor_section_right">
            <img className="BecomeInstructor_section_right_img" src={props.img} alt="girl" />
        </div>
        </div>
    </div>
  )
}

export default BecomeInstructor