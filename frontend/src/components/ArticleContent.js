import artdetails from "../articlecontents";
import Nature from "../images/nature1.jpg";
// import Article_1 from "../images/article1.jpg";
export default function TrailContent(props) {
  for (const key in artdetails) {
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
              <p
                className="display-3 font-weight-bold"
                style={{ paddingTop: "16rem" }}
              >
                {artdetails[key].title}
              </p>
              <p className="m-auto fw-light " style={{ paddingBottom: "8rem" }}>
                {artdetails[key].desc}
              </p>
            </div>
            {/* content on photo end  */}


            <div className=" bg-white text-black">
              <div className="container text-left">

                {/* Heading part */}
                <p className="display-4" style={{ paddingTop: "0.5em" }}>
                  {artdetails[key].title}
                </p>
                <p className="fw-light mb-0 pb-3">
                  {/* The journey of a thousand miles begins with a singe step */}
                </p>
                {/* Heading part end  */}

              </div>
            </div>


            {/* content part  */}
            <div className="bg-white text-black">
              <div className="container text-left">
                <div className="fs-5">
                  {/* <p className="p-3 mb-0">{artdetails[key].content}</p> */}
                  <div className="article_content">
                    {artdetails[key].content}
                  </div>
                </div>
              </div>
            </div>
            {/* content part end  */}


          </div>
        </div>
      );
    }
  }
}
