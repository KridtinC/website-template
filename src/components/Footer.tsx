const footerBox = {
    width: "50%",
}

function Footer() {
    return (
        <div className="font-small pt-4" data-aos="fade-up">
            <div style={{ display: "flex" , marginLeft: "50px" }}>
                <div style={footerBox}>
                    <h4>Navigation</h4>
                    <ul>
                        <li className="list-unstyled">
                            <a href="#" className="App-link">Home</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#" className="App-link">Works</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#" className="App-link">About</a>
                        </li>
                    </ul>
                </div>
                <div style={footerBox}>
                    <h4>Social Link</h4>
                    <ul>
                        <li className="list-unstyled">
                            <a href="https://github.com/KridtinC" target="_blank" className="App-link">GitHub</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="https://www.linkedin.com/in/kridtinc/" target="_blank" className="App-link">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-3" style={{textAlign: "center"}}>
                <p>© 2021 Copyright:
                <a href="#" className="App-link" > MKT Portfolio</a>
                </p>
            </div>
        </div>
    )
}


export default Footer