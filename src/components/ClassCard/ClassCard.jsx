import "./ClassCard.css"
const ClassCard = (props) => {
  return (
    <div className="ClassCard">
        {props.icon}
        <h1 className="ClassCard_h1">{props.title}</h1>
        <p className="ClassCard_p">{props.desc}</p>
    </div>
  )
}

export default ClassCard