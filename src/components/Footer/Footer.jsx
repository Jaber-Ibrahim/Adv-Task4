import "./Footer.css"
import {AiOutlineInstagram , AiOutlineTwitter , AiOutlineBehance} from "react-icons/ai"
import {FaFacebookF , FaLinkedinIn} from "react-icons/fa"
import footerImg from "./../../assets/footer1.png"

const Footer = () => {
  return (
    <footer>
        <div className="footer_container container">
            <div className="footer_container_col">
                <h1 className="footer_container_col_h1">About us</h1>
                <p className="footer_container_col_p">far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live</p>
                <h1 className="footer_container_col_h1">connect</h1>
                <div className="footer_container_col_icons">
                    <div className="footer_container_icon">
                    <AiOutlineInstagram className="footer_container_svg"/>
                    </div>
                    <div className="footer_container_icon">
                    <AiOutlineTwitter className="footer_container_svg"/>
                    </div>
                    <div className="footer_container_icon">
                    <FaFacebookF className="footer_container_svg"/>
                    </div>
                    <div className="footer_container_icon">
                    <FaLinkedinIn className="footer_container_svg"/>
                    </div>
                    <div className="footer_container_icon">
                    <AiOutlineBehance className="footer_container_svg"/>
                    </div>
                </div>
            </div>
            <div className="footer_container_col">
                <h1 className="footer_container_col_h1">projects</h1>
                <ul className="footer_container_ul">
                    <li className="footer_container_li">web design</li>
                    <li className="footer_container_li">html5</li>
                    <li className="footer_container_li">css3</li>
                    <li className="footer_container_li">jquery</li>
                    <li className="footer_container_li">bootstrap</li>
                </ul>
            </div>
            <div className="footer_container_col">
                <h1 className="footer_container_col_h1">gallery</h1>
                <div className="footer_container_gallery">
                    <img className="footer_container_img" src={footerImg} alt="" />
                    <img className="footer_container_img" src={footerImg} alt="" />
                    <img className="footer_container_img" src={footerImg} alt="" />
                    <img className="footer_container_img" src={footerImg} alt="" />
                    <img className="footer_container_img" src={footerImg} alt="" />
                    <img className="footer_container_img" src={footerImg} alt="" />
                </div>
            </div>
            <div className="footer_container_col">
                <h1 className="footer_container_col_h1">contact</h1>
                <div className="footer_container_info">
                    <p className="footer_container_address">
                        Tartous , Al Majd Suburb
                    </p>
                    <span className="footer_container_detail">+963937645463</span>
                    <span className="footer_container_detail">+963937645463</span>
                    <span className="footer_container_detail">jaberebra@gmail.com</span>
                </div>
            </div>
        </div>
            <p className="footer_tail container">copyright &copy; 2023.All Rights Reserved. Designed with love By <span className="footer_tail_span">Jaber Ibrahim</span> </p>
    </footer>
  )
}

export default Footer