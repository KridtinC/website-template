import kbtgLogo from "../../assets/experiences/kbtg.png"
import trueLogo from "../../assets/experiences/true.png"
import { ExperiencesLogoStyle } from "./About"

export default function Experiences() {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "50%" }} data-aos="fade-up">
                <img src={kbtgLogo} alt="" style={ExperiencesLogoStyle} />
                <p>KASIKORN <br></br> Business - Technology Group</p>
                <h4>Jul 1, 2020 – Now as Software Engineer</h4>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%" }} data-aos="fade-up">
                <img src={trueLogo} alt="" style={ExperiencesLogoStyle} />
                <p>True Information Technology</p>
                <h4>Jun 4, 2019 – Aug 2, 2019 as Software Developer</h4>
            </div>
        </div>
    )
}