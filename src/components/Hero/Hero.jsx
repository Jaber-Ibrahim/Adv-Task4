import "./Hero.css"
import {PrimaryButton} from './../import';
const Hero = (props) => {
  return (
    <div className="Hero">
        <div className="Hero__Info">
            <p className="Hero__Info_p">{props.para}</p>
            <h1 className="Hero__Info_h1">{props.header}</h1>
            <PrimaryButton anchor = {props.anchor}/>
        </div>
    </div>
  )
}

export default Hero