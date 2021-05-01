import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol } from 'mdbreact';
import { Repo } from '../../model/Repo';

export interface Options {
    repo: Repo
}

function FeaturedItem(props: Options) {
    return (
        <div data-aos="fade-up" style={{"marginTop": "10px", "marginBottom": "10px"}}>
            <MDBCol>
                <MDBCard style={{ width: "30rem" }}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle><p style={{ "color": "black" }}>{props.repo.name}</p> </MDBCardTitle>
                        <MDBCardText>
                            {props.repo.desc}
                        </MDBCardText>
                        <MDBCardText>
                            Tech Stacks: TBD
                        </MDBCardText>
                        <MDBBtn href={props.repo.url} target="_blank" rel="noopener noreferrer" color="indigo">GITHUB URL</MDBBtn>
                        <MDBBtn href="" color="elegant">VISIT DEMO</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </div>
    )
}

export default FeaturedItem