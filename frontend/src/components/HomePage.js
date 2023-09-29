import Nature from "../images/nature1.jpg";
import Nature2 from "../images/nature2.jpg";

export default function Captions() {
  return (
    <div className="z-2 position-relative bg-white">
      <div
        id="carouselExampleDark"
        className="carousel carousel slide w-75 mx-auto container"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={Nature2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Nature} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Nature2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container z-2 position-relative bg-white">
        <p>
          Welcome to Novare , the adventure and trekking club of IIT Palakkad !
          IIT Palakkad , being located in the lap of the mighty Western Ghat
          ranges is embraced by forests and various trekking trails to explore.
        </p>
        <p>
          Embracing the spirit of adventure, exploration and sustainability ,we
          encourage the student community to step out of their comfort zone,
          discover new landscapes, and forge a deeper connection with nature.
        </p>
        <p>
          Unleash your wanderlust and discover the mesmerizing secrets of
          untamed Indian landscapes. Let the journey begin!
        </p>
      </div>
    </div>
  );
}
