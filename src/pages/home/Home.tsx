import AnimatedCarousel from "../../components/carousel/Carousel"
import FeaturedItem from "../../components/featured-item/FeaturedItem"

const BodyStyle = {
    width: "100%",
}

function Home() {
    return (
        <div style={BodyStyle}>
            <AnimatedCarousel></AnimatedCarousel>
            <h1 style={{margin: "50px"}} data-aos="fade-right">Featured</h1>
            <FeaturedItem data={"test"} isRTL={false}></FeaturedItem>
            <FeaturedItem data={"test"} isRTL={true}></FeaturedItem>
            <FeaturedItem data={"test"} isRTL={false}></FeaturedItem>
        </div>
    )
}

export default Home