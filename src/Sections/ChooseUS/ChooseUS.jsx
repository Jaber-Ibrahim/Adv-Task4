import "./ChooseUS.css"
import { ChooseAccordion , Title} from "./../../components/import"
import chooseImg from "./../../assets/whyChoose1.png"
import ChooseUSData from "./../../data/ChooseUsData"

const ChooseUS = () => {
    const items = ChooseUSData.map((item) => {
        return (<ChooseAccordion key = {item.id} title = {item.title} desc = {item.desc}/>)
    })
  return (
    <div className="ChooseAccordion_section container">
        <div className="ChooseAccordion_section_img">
            <img src={chooseImg} alt="" />
        </div>
        <div className="ChooseAccordion">
        <Title title = "why choose us" para = "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live" />
        {items}
    </div>
    </div>
  )
}

export default ChooseUS