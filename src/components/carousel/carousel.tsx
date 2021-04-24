import Carousel from 'react-bootstrap/Carousel';
import cc1pic from '../../assets/cc1.jpg'
import cc2pic from '../../assets/cc2.jpg'
import cc3pic from '../../assets/cc3.jpg'

const verticalCenter = {
  margin: '100',
  position: 'absolute',
  top: '50 %',
};

function AnimatedCarousel() {
  return (
    // <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    //   <ol className="carousel-indicators">
    //     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //   </ol>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src={cc1pic} className="d-block w-100" style={{ height: "100px", width: "auto" }} />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={cc2pic} className="d-block w-100" />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={cc3pic} className="d-block w-100" />
    //     </div>
    //   </div>
    //   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Previous</span>
    //   </a>
    //   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Next</span>
    //   </a>
    // </div>
    // <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={cc1pic}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={cc2pic}
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={cc3pic}
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner vertical-center">
        <div className="carousel-item active">
          <img src={cc1pic} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={cc2pic} className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={cc3pic} className="d-block w-100" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default AnimatedCarousel