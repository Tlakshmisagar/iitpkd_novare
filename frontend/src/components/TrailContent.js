import details from "../trailcontents";
import Nature from "../images/nature1.jpg";
// import Nature2 from "../images/nature2.jpg";

export default function TrailContent(props) {
  console.log(details.dhoni);
  for (const key in details) {
    if (props.url === key) {
      return (
        <div className="">
          <img
            className="img-fluid position-fixed"
            src={Nature}
            //  src="https://drive.google.com/file/d/1ug4PnX-bfpzuCK_eQNEkkgKLBFnyE7-Z/view?usp=sharing"
            //  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6X47X9LAM5y5rpDl_qCk3OK4xoExFp2Q3Q&usqp=CAU"
            alt="something"
          />
          <div className=" z-2 position-relative ">
            {/* content on photo  */}
            <div className="text-white text-center container">
              <p className="display-3 font-weight-bold" style={{ paddingTop: "16rem" }}>
                {details[key].title}
              </p>
              <p className="m-auto fw-light" style={{ paddingBottom: "8rem" }}>
                {details[key].desc}
              </p>
            </div>
            {/* content on photo end  */}
            <div className=" bg-white text-black ">
              <div className="container text-left">
                {/* Heading part */}
                <p className="display-4" style={{ paddingTop: "0.5em" }}>
                  {details[key].title}
                </p>
                <p className="fw-light mb-0 pb-3">
                  The journey of a thousand miles begins with a singe step
                </p>
                {/* Heading part end  */}
                
              </div>
            </div>
            <div
              className="z-2 position-relative "
              style={{ backgroundColor: "#F6F6F6 " }}
            >
              <div className="container">
                <div className="pt-4">
                  <p className="display-5 text-center">Trecking info</p>
                </div>
                <div className="row p-3 text-center">
                  <div className="distance col ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      fill="#4c555e"
                      className="bi bi-person-walking"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.75 1.75 0 0 1-.088.395l-.318.906.213.242a.75.75 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z" />
                      <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.75.75 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914l2.345-3.048Zm4.22-4.215-.494-.494.205-1.843a1.93 1.93 0 0 0 .006-.067l1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z" />
                    </svg>
                    <div className="pt-2">Distance</div>
                    <div className="pt-3 " style={{color: "limegreen"}}>{details[key].Distance}</div>
                  </div>
                  <div className="duration col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      fill="#4c555e"
                      className="bi bi-clock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                    <div className="pt-2">Duration</div>
                    <div className="pt-3 " style={{color: "limegreen"}}>{details[key].Duration}</div>
                  </div>
                  <div className="how_to_reach col ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      fill="#4c555e"
                      className="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <div className="pt-2">How to reach</div>
                    <div className="pt-3 " style={{color: "limegreen"}}>{details[key].How_to_reach}</div>
                  </div>
                  <div className="attractions col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      fill="#4c555e"
                      className="bi bi-emoji-heart-eyes"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z" />
                    </svg>
                    <div className="pt-2">Attractions</div>
                    <div className="pt-3 " style={{color: "limegreen"}}>{details[key].Attractions}</div>
                  </div>
                  <div className="best_season col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      fill="#4c555e"
                      className="bi bi-cloud-sun-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                      <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                    </svg>
                    <div className="pt-2">Best season to trek</div>
                    <div className="pt-3 " style={{color: "limegreen"}}>{details[key].Best_season_to_trek}</div>
                  </div>
                  <div className="difficulty col">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      fill="#4c555e"
                      className="bi bi-speedometer2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                      />
                    </svg>
                    <div className="pt-2">Difficulty level</div>
                    <div className="pt-3 " style={{color: "limegreen"}}>{details[key].Difficulty_level}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white text-black">
              <div className="container text-left">
                {/* content part */}
                <div className="fs-5">
                  <p className="p-3 mb-0">{details[key].content}</p>
                  {/* <div className="p-3"></div> */}
                </div>
                {/* content part end  */}
              </div>
            </div>
          </div>

          <div className=" z-2 position-relative ">
            <div className=" bg-white text-black">
              <div className="fs-1 container">
                <h1 className="m-0 pt-3 text-center display-5 ">Gallery </h1>
                <div> photos section </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
