import AnimatedCarousel from "./components/carousel/carousel";
import NavBar from "./components/navbar";

function Header() {
    return (
        <div>
            <NavBar></NavBar>
            <AnimatedCarousel></AnimatedCarousel>
        </div>
    )
}

export default Header