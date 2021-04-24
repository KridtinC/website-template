const menuStyle = {
    margin: "30px",
}

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark" data-aos="fade-down">
            <a className="navbar-brand" href="#" style={{margin: "30px"}}>
                MKT Portfolio
            </a>
            <div className="d-flex">
                <a className="navbar-brand" href="#" style={menuStyle}>
                    Home
                </a>
                <a className="navbar-brand" href="#"  style={menuStyle}>
                    Works
                </a>
                <a className="navbar-brand" href="#"  style={menuStyle}>
                    About
                </a>
            </div>
        </nav>

    );
}

export default NavBar;