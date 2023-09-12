import "./Pricing.css"
import {Title, PricingCard} from './../../components/import';
import PricingData from "./../../data/PricingData"

const Pricing = () => {
    const myCards = PricingData.map((item,index) =>{
        return(<PricingCard key= {item.id}
            title = {item.title}
            price = {item.price}
            desc = {item.desc}
            bool = {index}/>)
    })
  return (
    <div className="Pricing_section">
        <Title title = "pricing" para = "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live"/>
        <div className="Pricing_section_container container">
            {myCards}
        </div>
    </div>
  )
}

export default Pricing