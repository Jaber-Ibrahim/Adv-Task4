
import "./CategoryCard.css"
// import { FaBeer } from 'react-icons/fa';


const CategoryCard = (props) => {


  return (
    <div className="CategoryCard">
    <div className="CategoryCard_icon">
        {props.icon}
    </div>
    <div className="CategoryCard_info">
        <h1 className="CategoryCard_h1">{props.title}</h1>
        <span className="CategoryCard_span">{props.num} courses</span>
    </div>
</div>



  )
}

export default CategoryCard