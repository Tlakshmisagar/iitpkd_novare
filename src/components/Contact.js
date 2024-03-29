import Nature from "../images/nature1.jpg";
import { motion } from "framer-motion"

export default function Contact() {
  let mail_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      fill="currentColor"
      className="bi bi-envelope-open"
      viewBox="0 0 16 16"
    >
      <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
    </svg>
  );

  let insta_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      fill="black"
      className="bi bi-instagram"
      viewBox="0 0 17 17"
    >
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
    </svg>
  );
  return (
    <motion.div className="" initial={{x:-1000,opacity: 0}} animate={{x:0, opacity: 1}} exit={{x:1000,opacity: 0}} transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}>
      <img
        className="img-fluid position-fixed top-0"
        src={Nature}
        //  src="https://drive.google.com/file/d/1ug4PnX-bfpzuCK_eQNEkkgKLBFnyE7-Z/view?usp=sharing"
        //  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6X47X9LAM5y5rpDl_qCk3OK4xoExFp2Q3Q&usqp=CAU"
        alt="something"
      />
      <div className="z-2 position-relative">
        {/* <div className="py-4"></div> */}
        <div className="text-white text-center container">
          <p className="display-3 " style={{ paddingTop: "14rem" }}>
            Contact Us
          </p>
          <p className="m-auto fw-light" style={{ paddingBottom: "7rem" }}>
            For any content partnerships and queries, feel free to contact Us
          </p>
        </div>
        <div
          className="bg-light-subtle"
          style={{ paddingTop: "6rem", paddingBottom: "7rem" }}
        >
          <div className="container">
            <div className="row ">
              <div className="col shadow mx-5" data-aos = "fade-up" data-aos-duration="1500">
                <div className="py-3 text-center">
                 
                    {insta_icon}
                    
                  <h5 className="my-4">Follow us on Instagram</h5>
                  <p className="my-3">Stay connected with us on Instagram for exclusive content. Follow us to be part of our vibrant community and join the conversation. Your support means the world to us! </p>
                  <a href="https://instagram.com/novare_iitpkd?igshid=MzNlNGNkZWQ4Mg==">@novare_iitpkd</a>
                </div>
              </div>
              <div className="col shadow" data-aos = "fade-up" data-aos-duration="1500">
                <div className="py-3 text-center">
                  <div className="d-flex justify-content-center">
                    {mail_icon}
                  </div>
                  <h5 className="my-4">We are just an Email away</h5>
                  <p className="text-center my-3">Feel free to reach out to us at any time via email for personalized support and quick responses. Your inquiries matter to us, and we're here to ensure your experience is top-notch. </p>
                  <p>Mail id - novare@iitpkd.ac.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
