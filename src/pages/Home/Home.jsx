import { Container, Hero , Title , AllCategoryCards} from "../../components/import"
import { BecomeInstructor, EducationClass , Courses , SchoolNews , Pricing, ChooseUS} from "../../Sections/ImportSections"
import girlImg from "./../../assets/girl.png"
import aboutUsImg from "./../../assets/aboutUs.png"

const Home = () => {
  return (
  <>
    <Hero
    para= "watch the video"
    header ="education is the mother of the leadership"
    anchor = "explore courses" />
    <Container>
        <Title title = "browse top category"/>
        <AllCategoryCards/>
     </Container>
        <BecomeInstructor title = "become an instuctor"
        desc = "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live" 
        first = "behind the word mountains"
        second = "far far away mountains"
        third = "large language ocean"
        anchor = "get started"
        img = {girlImg}
        />
        <EducationClass/>
        <Courses/>
    <Hero para= "education for tomorrow's leaders" 
    header ="far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live"
    anchor = "Enroll now" />
     <BecomeInstructor title = "about us"
        desc = "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live" 
        first = "separated they live"
        second = "bookmaeksgrove right at the coast"
        third = "large language ocean"
        num1 = "204+"
        h1 = "NO.Students"
        num2 = "20+"
        h2 = "NO.Teachers"
        num3 = "10+"
        h3 = "NO.Awards"
        anchor = "admission"
        anchor2 = "learn more"
        img = {aboutUsImg}
        />
        <SchoolNews title = "school news" descr = "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live"/>
        <Pricing/>
        <ChooseUS/>

  </>
  )
}

export default Home