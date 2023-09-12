import "./Title.css"


const Title = (props) => {
  return (
    <div className="Main_Title">
        <h1 className="Main_Title_h1">{props.title}</h1>
        <p className="Main_Title_p">{props.para}</p>
    </div>
  )
}

export default Title