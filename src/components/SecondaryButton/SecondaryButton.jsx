import "./SecondaryButton.css"
const SecondaryButton = (props) => {
  return (
    <a className= {props.anchor2 ? "SecondaryButton" : ""} href="http://linkedin.com" target="_blank">{props.anchor2}</a>
  )
}

export default SecondaryButton