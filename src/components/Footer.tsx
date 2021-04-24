const footerBox = {
    width: "50%",
}

function Footer() {
    return (
        <div className="font-small pt-4">
            <div style={{ display: "flex" }}>
                <div style={footerBox}>
                    <h4>Navigation</h4>
                    <ul>
                        <li className="list-unstyled">
                            <a href="#">Home</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#">Works</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#">About</a>
                        </li>
                    </ul>
                </div>
                <div style={footerBox}>
                    <h4>Social Link</h4>
                    <ul>
                        <li className="list-unstyled">
                            <a href="https://github.com/KridtinC" target="_blank">GitHub</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="https://www.linkedin.com/in/kridtinc/" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-3">
                <p>© 2021 Copyright:
                <a href="#"> MKT Portfolio</a>
                </p>
            </div>
        </div>
    )
}


export default Footer