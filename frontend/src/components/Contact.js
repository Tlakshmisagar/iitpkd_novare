import Nature from "../images/nature1.jpg";

export default function Contact() {
  return (
    <div className="py-5">
      {/* <img
          src={Nature}
          className="img-fluid position-fixed"
          alt="A generic square placeholder image with rounded corners in a figure."
        /> */}
      <div class="card position-relative z-2 ">
        <img class="card-img-top " src={Nature} alt="some image" />
        <div class="card-img-overlay text-white text-center">
          <h1 class="pt-5"> contact us </h1>
          <p>Have any querries, feel free to contact us</p>
        </div>
      </div>

      {/* <div className="z-2 position-relative ">
        <div className="text-white text-center container">
          <h1 className="mt-1 mb-0 align-middle">Contact Us</h1>
          <p className="m-auto">Have any more querries, feel free to contact us</p>
        </div>
      </div> */}
    </div>
  );
}
