import { useEffect, useState } from "react";
import GetStarredRepo from "../../apis/users/GetStarredRepo";
import AnimatedCarousel from "../../components/carousel/Carousel"
import FeaturedItem from "../../components/featured-item/FeaturedItem"
import { Repo } from "../../model/Repo";

const BodyStyle = {
    width: "100%",
}

function Home() {
    async function GetPinnedRepo(): Promise<Repo[]> {
        let resp = await GetStarredRepo()

        console.log(resp)
        var repos: Repo[] = [];
        resp.data.forEach((repoRes: any) => {
            var repo: Repo = {
                name: repoRes.name,
                desc: repoRes.description,
                url: repoRes.html_url,
            }
            repos.push(repo);
        });

        return repos
    }

    var initRepos: Repo[] = [];
    const [repos, setRepos] = useState(initRepos);
    useEffect(() => {
        GetPinnedRepo().then((r) => {
            setRepos(r);
        });
    }, [])

    return (
        <div style={BodyStyle}>
            <AnimatedCarousel></AnimatedCarousel>
            <h1 style={{ margin: "50px" }} data-aos="fade-right">Featured</h1>
            <div style={{ "display": "flex", "flexFlow" : "row wrap", "justifyContent": "center" }}>
                {repos.map((repo, i) => {
                    return <FeaturedItem key={i} repo={repo}></FeaturedItem>
                })}
            </div>

            {/* <FeaturedItem data={"test"} isRTL={true}></FeaturedItem>
            <FeaturedItem data={"test"} isRTL={false}></FeaturedItem> */}
        </div>
    )
}

export default Home