function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#" style={{margin: "30px"}}>
                Website Template
            </a>
            <div className="d-flex">
                <a className="navbar-brand" href="#">
                    Test1
                </a>
                <a className="navbar-brand" href="#">
                    Test2
                </a>
            </div>
        </nav>

    );
}

export default NavBar;