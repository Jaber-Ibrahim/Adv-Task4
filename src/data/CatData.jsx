import { GiMaterialsScience } from "react-icons/gi";
import { MdBusinessCenter , MdOutlineAnimation } from "react-icons/md";
import { PiCalculator } from "react-icons/pi";
import { SiCoinmarketcap } from "react-icons/si";
import { AiOutlineCamera } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { FaMusic } from "react-icons/fa";

const CatData = [
    {
        icon : (<><GiMaterialsScience className="CategoryCard_icon_i"/></>),
        cat : "science" , 
        num : "1,344",
        id : "1s",
    },
    {
        icon : (<><MdBusinessCenter className="CategoryCard_icon_i"/></>),
        cat : "business" , 
        num : "1,013",
        id : "2b",
    },
    {
        icon : (<><PiCalculator className="CategoryCard_icon_i"/></>),
        cat : "finance accounting" , 
        num : "1,547",
        id : "3f",
    },
    {
        icon : (<><BsFillPencilFill className="CategoryCard_icon_i"/></>),
        cat : "design" , 
        num : "1,864",
        id : "4d",
    },{
        icon : (<><FaMusic className="CategoryCard_icon_i"/></>),
        cat : "music" , 
        num : "1,176",
        id : "5music",
    },
    {
        icon : (<><SiCoinmarketcap className="CategoryCard_icon_i"/></>),
        cat : "marketing" , 
        num : "1,742",
        id : "6markrting",
    },
    {
        icon : (<><AiOutlineCamera className="CategoryCard_icon_i"/></>),
        cat : "photography" , 
        num : "1,633",
        id : "7s",
    },
    {
        icon : (<><MdOutlineAnimation className="CategoryCard_icon_i"/></>),
        cat : "animation" , 
        num : "1,645",
        id : "8a",
    }
]

export default CatData