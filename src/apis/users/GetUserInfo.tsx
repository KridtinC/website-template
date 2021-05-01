import axios from "axios";
import SetHeaderAuthorization, { GitHubAPIURL } from "../apis";

export async function GetUserInfo(): Promise<any> {

    try {
        SetHeaderAuthorization();
        var resp = await axios.get(`${GitHubAPIURL}/users/${process.env.REACT_APP_GITHUB_USERNAME}`)
        return resp
    } catch (e) {
        console.log(e)
    }

}