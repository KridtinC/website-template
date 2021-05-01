import cc1pic from '../../assets/cc1.jpg'
import cc2pic from '../../assets/cc2.jpg'
import cc3pic from '../../assets/cc3.jpg'

function AnimatedCarousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-aos="fade-down">
      <div className="carousel-inner vertical-center">
        <div className="carousel-item active">
          <img src={cc1pic} alt="" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={cc2pic} alt="" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={cc3pic} alt="" className="d-block w-100" />
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