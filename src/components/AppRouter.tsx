import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Works from "../pages/works/Works";

const menuStyle = {
    margin: "30px",
}

const bodyPadding = {
    paddingTop: "115px"
}


function AppRouter() {
    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-dark bg-dark fixed-top" data-aos="fade-down">
                    <a className="navbar-brand" href="/" style={{ margin: "30px" }}>
                        MKT Portfolio
            </a>
                    <div className="d-flex">
                        <Link className="navbar-brand" to="/" style={menuStyle}>
                            Home
                </Link>
                        <Link className="navbar-brand" to="/works" style={menuStyle}>
                            Works
                </Link>
                        <Link className="navbar-brand" to="/about" style={menuStyle}>
                            About
                </Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <div style={bodyPadding}>
                            <Home />
                        </div>

                    </Route>
                    <Route path="/works">
                        <div style={bodyPadding}>
                            <Works />
                        </div>
                    </Route>
                    <Route path="/about">
                        <div style={bodyPadding}>
                            <About />
                        </div>
                    </Route>
                </Switch>
            </div>

        </BrowserRouter>


    );
}

export default AppRouter;