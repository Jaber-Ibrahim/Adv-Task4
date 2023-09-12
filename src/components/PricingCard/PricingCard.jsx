import { PrimaryButton, SecondaryButton } from "../import"
import "./PricingCard.css"
const PricingCard = (props) => {
  return (
    <div className="PricingCard">
        <h1 className="PricingCard_title">{props.title}</h1>
        <h3 className="PricingCard_price"><span className="PricingCard_span">${props.price}</span>/month</h3>
        <p className="PricingCard_p">{props.desc}</p>
        {props.bool%2 === 0 ?  <SecondaryButton anchor2 = "get started"/> :  <PrimaryButton anchor = "get started" />}
    </div>
  )
}

export default PricingCard
