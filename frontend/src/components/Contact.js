import Nature from "../images/nature1.jpg";
import Insta from "../images/insta.png";
import Mail from "../images/mail.png";

export default function Contact() {
  return (
    <div className="">
      <img
        className="img-fluid position-fixed"
        src={Nature}
        //  src="https://drive.google.com/file/d/1ug4PnX-bfpzuCK_eQNEkkgKLBFnyE7-Z/view?usp=sharing"
        //  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6X47X9LAM5y5rpDl_qCk3OK4xoExFp2Q3Q&usqp=CAU"
        alt="something"
      />
      <div className="z-2 position-relative">
        <div className="py-4"></div>
        <div className="text-white text-center container">
          <p className="display-3 " style={{ paddingTop: 240 }}>
            Contact Us
          </p>
          <p className="m-auto fw-light" style={{ paddingBottom: 120 }}>
            For any content partnerships and queries, feel free to contact Us
          </p>
        </div>
        <div className="bg-white" style={{ paddingTop: 50, paddingBottom: 50 }}>
          <div class="container px-4">
            <div class="row gx-5">
              <div class="col ">
                <div class="p-3 ">
                  <a
                    href="https://instagram.com/novare_iitpkd?igshid=MzNlNGNkZWQ4Mg=="
                    className="me-4 text-reset d-flex justify-content-center" /*target="_blank" */
                  >
                    <img className="" src={Insta} alt="" />
                  </a>
                  <h4 className="text-center">Instagram</h4>
                  <p className="text-center">novare_iitpkd</p>
                </div>
              </div>
              <div class="col">
                <div class="p-3 ">
                  <div className="d-flex justify-content-center">
                    <img className="" src={Mail} alt="" />
                  </div>
                  <h4 className="text-center">Mail us</h4>
                  <p className="text-center">novare@iitpkd,ac.in</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex" style={{}}>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
