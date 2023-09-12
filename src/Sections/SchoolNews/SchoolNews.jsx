import "./SchoolNews.css"

import { SchoolCard, Title } from "../../components/import"
import SchoolData from "../../data/schoolData"
const SchoolNews = (props) => {
    const myCards = SchoolData.map((item) => {
        return (<SchoolCard key = {item.id} 
        img = {item.img}
        cardTitle = {item.cardTitle}
        date = {item.date}
        desc = {item.desc}
        />)
    })
  return (
    <div className="SchoolNews_section">
        <Title title = {props.title} para = {props.descr} />
        <div className="SchoolNews_section_container container">
        {myCards}
        </div>
    </div>
  )
}

export default SchoolNews