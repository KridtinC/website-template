import FeaturedItem from "./components/featured-item/FeaturedItem"

const BodyStyle = {
    width: "100%",
}

function Body() {
    return (
        <div style={BodyStyle}>
            <h1 style={{margin: "50px"}}>Featured</h1>
            <FeaturedItem data={"test"} isRTL={false}></FeaturedItem>
            <FeaturedItem data={"test"} isRTL={true}></FeaturedItem>
            <FeaturedItem data={"test"} isRTL={false}></FeaturedItem>
        </div>
    )
}

export default Body