import axios from "axios";
import SetHeaderAuthorization, { GitHubAPIURL } from "../apis";

async function GetStarredRepo(): Promise<any> {
    try {
        SetHeaderAuthorization();
        var resp = await axios.get(`${GitHubAPIURL}/users/${process.env.REACT_APP_GITHUB_USERNAME}/starred`)
        return resp
    } catch (e) {
        console.log(e)
    }

}

export default GetStarredRepo