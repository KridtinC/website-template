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

const stacksLogoStyle = {
    height: "120px",
    width: "120px",
    padding: "10px",
}

const stacksContainerStyle = {
    margin: "10px",
}


export default function TechStacks() {
    return (
        <div data-aos="fade-up">


            <div style={stacksContainerStyle}>
                <p>Databases</p>
                <div style={{ display: "flex", "flexFlow": "row wrap" }}>
                    <img src={mySQLLogo} alt="" style={stacksLogoStyle} />
                    <img src={oracleLogo} alt="" style={stacksLogoStyle} />
                    <img src={ydbLogo} alt="" style={stacksLogoStyle} />
                </div>
            </div>
            <div style={stacksContainerStyle}>
                <p>Languages</p>
                <div style={{ display: "flex", "flexFlow": "row wrap" }}>
                    <img src={javaLogo} alt="" style={stacksLogoStyle} />
                    <img src={pythonLogo} alt="" style={stacksLogoStyle} />
                    <img src={tsLogo} alt="" style={stacksLogoStyle} />
                    <img src={htmlLogo} alt="" style={stacksLogoStyle} />
                    <img src={kotlinLogo} alt="" style={stacksLogoStyle} />
                    <img src={goLogo} alt="" style={stacksLogoStyle} />
                    <img src={csharpLogo} alt="" style={stacksLogoStyle} />
                    <img src={sqlLogo} alt="" style={stacksLogoStyle} />
                </div>
            </div>
            <div style={stacksContainerStyle}>
                <p>Frameworks</p>
                <div style={{ display: "flex", "flexFlow": "row wrap" }}>
                    <img src={reactLogo} alt="" style={stacksLogoStyle} />
                    <img src={angularLogo} alt="" style={stacksLogoStyle} />
                    <img src={nodejsLogo} alt="" style={stacksLogoStyle} />
                    <img src={androidLogo} alt="" style={stacksLogoStyle} />
                    <img src={robotLogo} alt="" style={stacksLogoStyle} />
                </div>
            </div>
            <div style={stacksContainerStyle}>
                <p>Clouds</p>
                <div style={{ display: "flex", "flexFlow": "row wrap" }}>
                    <img src={awsLogo} alt="" style={stacksLogoStyle} />
                    <img src={gCloudLogo} alt="" style={stacksLogoStyle} />
                </div>
            </div>





        </div>
    )
}