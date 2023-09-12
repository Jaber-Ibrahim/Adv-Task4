import CatData from "../../data/CatData";
import CategoryCard from "./CategoryCard"
const AllCategoryCards = () => {
    const cards = CatData.map((card) =>{
        return (<CategoryCard key={card.id} title = {card.cat} num = {card.num} icon = {card.icon}/>)
    })
  return (
    <div className="CategoryCard_container">
        {cards}
    </div>
  )
}

export default AllCategoryCards