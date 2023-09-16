import Nature from "../images/nature1.jpg";
import Nature2 from "../images/nature2.jpg"

export default function Captions() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade " data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div 
        className="carousel-item active"
        data-bs-interval="4000" //to change the amount of time delay
        >
          <img
            // Add the image for the captions here
            src={Nature}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to Novare</h5>
            <p>The adventure and trekking club of IIT Palakkad !
</p>
          </div>
        </div>
        <div 
        className="carousel-item active"
        data-bs-interval="4000" //to change the amount of time delay
        >
          <img
            // Add the image for the captions here
            src={Nature2}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div 
        className="carousel-item active"
        data-bs-interval="4000" //to change the amount of time delay
        >
          <img
            // Add the image for the captions here
            src={Nature}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
