import "./Courses.css"
import { Title , CourseCard} from "../../components/import"
import CourseData from "./../../data/courseData"



const Courses = () => {
    const myCards = CourseData.map((item)=> {
        return (<CourseCard key = {item.id}
        img = {item.img}
        num = {item.num}
        rate = {item.rate}
        title = {item.title}
        desc = {item.desc}
        price = {item.price}/>)
        
    })
  return (
    <div className="Courses_section">
        <Title title = "the right course for you" para = "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live"/>
        <div className="Courses_section_container container">
            {myCards}
        </div>
    </div>
  )
}

export default Courses