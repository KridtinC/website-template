import { useEffect, useState } from "react"
import { GetUserInfo } from "../../apis/users/GetUserInfo";
import { UserInfo } from "../../model/User"
import TechStacks from "./TechStacks";
import Education from "./Educations";
import Experiences from "./Experiences";

const aboutBody = {
    margin: "50px",
}

const imgStyle = {
    display: "inline",
    margin: "0 auto",
    height: "100%",
    width: "auto",
}

export const StacksLogoStyle = {
    height: "120px",
    width: "120px",
    padding: "10px",
}

export const ExperiencesLogoStyle = {
    height: "auto",
    width: "50%",
    padding: "5px",
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

            <h1 style={{ margin: "50px" }} data-aos="fade-left">Education</h1>
            {Education()}
            <h1 style={{ margin: "50px" }} data-aos="fade-right">Experiences</h1>
            {Experiences()}
            <h1 style={{ margin: "50px" }} data-aos="fade-left">Technical Stacks</h1>
            {TechStacks()}



        </div>
    )
}

export default About