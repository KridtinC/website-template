import cuLogo from "../../assets/cu-logo.png"
import hwLogo from "../../assets/horwang-logo.png"

export default function Education() {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "50%" }} data-aos="fade-up">
                <img src={cuLogo} alt="" style={{ height: "auto", width: "50%" }} />
                <p>Chulalongkorn University</p>
                <h4>2019, Bachelor GPAX 3.09</h4>
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "50%" }} data-aos="fade-up">
                <img src={hwLogo} alt="" style={{ height: "auto", width: "13%" }} />
                <p>Horwang School</p>
                <h4>2015, Grade 12</h4>
            </div>
        </div>
    )
}