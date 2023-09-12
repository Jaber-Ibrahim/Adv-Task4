import { BecomeInstructor, ChooseUS, EducationClass } from "../../Sections/ImportSections"
import { Hero } from "../../components/import"
import girlImg from "./../../assets/girl.png"

const About = () => {
  return (
    <>
          <Hero
          para= "about us"
          header ="another free template by Jaber Ibrahim . far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live"
          anchor = "explore courses" />
          <BecomeInstructor title = "become an instuctor"
          desc = "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live" 
          first = "behind the word mountains"
          second = "far far away mountains"
          third = "large language ocean"
          anchor = "get started"
          img = {girlImg}
          />
          <EducationClass/>
          <ChooseUS/>
    </>
  )
}

export default About