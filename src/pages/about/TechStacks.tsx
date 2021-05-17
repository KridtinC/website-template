import mySQLLogo from "../../assets/databases/mysql.png"
import oracleLogo from "../../assets/databases/oracle.png"
import ydbLogo from "../../assets/databases/ydb.png"
import javaLogo from "../../assets/languages/java.png"
import pythonLogo from "../../assets/languages/python.png"
import tsLogo from "../../assets/languages/ts.png"
import htmlLogo from "../../assets/languages/html.png"
import kotlinLogo from "../../assets/languages/kotlin.png"
import goLogo from "../../assets/languages/golang.png"
import csharpLogo from "../../assets/languages/csharp.png"
import sqlLogo from "../../assets/languages/sql.png"
import reactLogo from "../../assets/frameworks/react.png"
import angularLogo from "../../assets/frameworks/angular.png"
import nodejsLogo from "../../assets/frameworks/nodejs.png"
import androidLogo from "../../assets/frameworks/android.png"
import robotLogo from "../../assets/frameworks/robot.png"
import awsLogo from "../../assets/clouds/aws.png"
import gCloudLogo from "../../assets/clouds/gcloud.png"
import { StacksLogoStyle } from "./About"



const stacksContainerStyle = {
    margin: "10px",
}


export default function TechStacks() {
    return (
        <div data-aos="fade-up">


            <div style={stacksContainerStyle}>
                <p>Databases</p>
                <div style={{ display: "flex", "flexFlow": "row wrap" }}>
                    <img src={mySQLLogo} alt="" style={StacksLogoStyle} />
                    <img src={oracleLogo} alt="" style={StacksLogoStyle} />
                    <img src={ydbLogo} alt="" style={StacksLogoStyle} />
                </div>
            </div>
            <div style={stacksContainerStyle}>
                <p>Languages</p>
                <div style={{ display: "flex", "flexFlow": "row wrap" }}>
                    <img src={javaLogo} alt="" style={StacksLogoStyle} />
                    <img src={pythonLogo} alt="" style={StacksLogoStyle} />
                    <img src={tsLogo} alt="" style={StacksLogoStyle} />
                    <img src={htmlLogo} alt="" style={StacksLogoStyle} />
                    <img src={kotlinLogo} alt="" style={StacksLogoStyle} />
                    <img src={goLogo} alt="" style={StacksLogoStyle} />
                    <img src={csharpLogo} alt="" style={StacksLogoStyle} />
                    <img src={sqlLogo} alt="" style={StacksLogoStyle} />
                </div>
            </div>
            <div style={stacksContainerStyle}>
                <p>Frameworks</p>
                <div style={{ display: "flex", "flexFlow": "row wrap" }}>
                    <img src={reactLogo} alt="" style={StacksLogoStyle} />
                    <img src={angularLogo} alt="" style={StacksLogoStyle} />
                    <img src={nodejsLogo} alt="" style={StacksLogoStyle} />
                    <img src={androidLogo} alt="" style={StacksLogoStyle} />
                    <img src={robotLogo} alt="" style={StacksLogoStyle} />
                </div>
            </div>
            <div style={stacksContainerStyle}>
                <p>Clouds</p>
                <div style={{ display: "flex", "flexFlow": "row wrap" }}>
                    <img src={awsLogo} alt="" style={StacksLogoStyle} />
                    <img src={gCloudLogo} alt="" style={StacksLogoStyle} />
                </div>
            </div>





        </div>
    )
}