import { useEffect, useState } from "react"
import { GetUserInfo } from "../../apis/users/GetUserInfo";
import { UserInfo } from "../../model/User"
import cuLogo from "../../assets/cu-logo.png"
import hwLogo from "../../assets/horwang-logo.png"

const aboutBody = {
    margin: "50px",
}

const imgStyle = {
    display: "inline",
    margin: "0 auto",
    height: "100%",
    width: "auto",
}

function About() {

    async function GetUserInformation(): Promise<UserInfo> {
        let resp = await GetUserInfo()

        var userInfo: UserInfo = {
            avaterURL: resp.data.avatar_url,
            name: resp.data.name,
            publicRepos: resp.data.public_repos,
        };

        return userInfo

    }

    var initUserInfo: UserInfo = {
        avaterURL: "",
        name: "",
        publicRepos: 0,
    };
    const [userInfo, setUserInfo] = useState(initUserInfo)
    useEffect(() => {
        GetUserInformation().then((user) => {
            setUserInfo(user)
        })
    }, [])

    return (
        <div style={aboutBody}>

            <div style={{ "display": "flex", "flexDirection": "column", "margin": "50px", "alignItems": "center", "textAlign": "center" }} data-aos="fade-down">
                <div style={{ "width": "300px", "height": "300px", "position": "relative", "overflow": "hidden", "borderRadius": "50%", margin: "15px" }}>
                    <img src={userInfo.avaterURL} alt="" style={imgStyle} />
                </div>
                <h1 style={{ margin: "15px" }} data-aos="fade-right">{userInfo.name}</h1>
                <h5 style={{ margin: "15px" }} data-aos="fade-left">An enthusiastic Software Engineer who keeps update new trends of technology and now interested in Blockchain technology. My next aim is consolidating Blockchain technology with an existing technology stacks to maximize capability of both technologies.</h5>


            </div>

            <h1 style={{ margin: "50px" }} data-aos="fade-right">Education</h1>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" , width: "50%"}} data-aos="fade-up">
                    <img src={cuLogo} alt="" style={{ height: "auto", width: "50%"}} />
                    <p>Chulalongkorn University</p>
                    <h4>2019, Bachelor GPAX 3.09</h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column" , width: "50%"}} data-aos="fade-up">
                    <img src={hwLogo} alt="" style={{ height: "auto", width: "13%"}} />
                    <p>Horwang School</p>
            <h4>2015, Grade 12</h4>
                </div>
            </div>

            

        </div>
    )
}

export default About