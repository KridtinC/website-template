import axios from 'axios';
import SetHeaderAuthorization, { GitHubAPIURL } from '../apis';

export interface Options {
    repositoryName: string
}

async function GetRepositoryInfo(props: Options): Promise<any> {
    try {
        SetHeaderAuthorization();
        var resp = await axios.get(`${GitHubAPIURL}/repos/${process.env.REACT_APP_GITHUB_USERNAME}/${props.repositoryName}`)
        return resp
    } catch (e) {
        console.log(e)
    }

}

export default GetRepositoryInfo