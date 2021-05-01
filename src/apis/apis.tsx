import axios from "axios"

export const GitHubAPIURL = "https://api.github.com"

export default function SetHeaderAuthorization() {
    axios.defaults.headers.common['Authorization'] = `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
}