
import "./ChooseAccordion.css"
import img from "./../../assets/whyChoose2.png"
import { useState } from "react"


const ChooseAccordion = (props) => {
    const [active , setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    }
  return (
    <div className="ChooseAccordion_item">
        <h1 className={active ? "ChooseAccordion_item_head active" : "ChooseAccordion_item_head"} onClick={() => toggle()}>{props.title}</h1>
        <div className={active ? "ChooseAccordion_item_body active" : "ChooseAccordion_item_body"}>
            <img className="ChooseAccordion_item_body_img" src={img} alt="" />
            <p className="ChooseAccordion_item_body_p">{props.desc}</p>
        </div>
    </div>
  )
}

export default ChooseAccordion