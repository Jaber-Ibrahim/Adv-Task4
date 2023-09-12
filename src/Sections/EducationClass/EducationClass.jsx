
import {Title , ClassCard} from './../../components/import.js'
import ClassData from "./../../data/ClassData.jsx"
import "./EducationClass.css"


const EducationClass = () => {
  const myCards = ClassData.map((item)=> {
    return (<ClassCard key={item.id} title = {item.class} desc = {item.desc} icon = {item.icon}/>)
  })
    return (
    <div className='EducationClass_section'>
            <Title title = "we have best education" para = "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live "/>
            <div className="EducationClass_section_container container">
              {myCards}
            </div>
    </div>
  )
}

export default EducationClass