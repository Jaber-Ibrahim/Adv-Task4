
import { PiCalculator } from "react-icons/pi";
import { BiBookReader } from "react-icons/bi";
import { BsBook ,BsHeadphones} from "react-icons/bs";
import { FaMusic , FaHistory } from "react-icons/fa";

const ClassData = [
    {
        icon : (<><FaMusic className="ClassCard_icon"/></>),
        class : "music class" , 
        desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        id : "1music",
    },
    {
        icon : (<><PiCalculator className="ClassCard_icon"/></>),
        class : "math class" , 
        desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        id : "2math",
    },
    {
        icon : (<><BsBook className="ClassCard_icon"/></>),
        class : "english class" , 
        desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        id : "3en",
    },
    {
        icon : (<><BiBookReader className="ClassCard_icon"/></>),
        class : "reading for kids" , 
        desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        id : "4reading",
    },
    {
        icon : (<><FaHistory className="ClassCard_icon"/></>),
        class : "history class" , 
        desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        id : "5history",
    },
    {
        icon : (<><BsHeadphones className="ClassCard_icon"/></>),
        class : "music" , 
        desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        id : "6mus",
    }
]

export default ClassData