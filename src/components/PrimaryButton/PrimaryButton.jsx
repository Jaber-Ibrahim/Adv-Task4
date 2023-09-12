import "./PrimaryButton.css"
const PrimaryButton = (props) => {
  return (
    <a className="PrimaryButton" href="http://linkedin.com" target="_blank">{props.anchor}</a>
  )
}

export default PrimaryButton