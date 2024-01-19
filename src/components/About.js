import Nature from "../images/nature1.jpg";
import Nature2 from "../images/nature2.jpg";
export default function About() {
  return (
    <>
      <div className="">
        <img
          className="img-fluid position-fixed top-0"
          src={Nature}
          alt="something"
        />

        <div className="z-2 position-relative">
          <div className="text-white text-center container">
            <p className="display-3 " style={{ paddingTop: "14rem" }}>
              About Us
            </p>
            <p className="m-auto fw-light" style={{ paddingBottom: "7rem" }}>
              Adventure awaits where the path less traveled beckons, and with
              each step, we discover the beauty of both the world and ourselves
            </p>
          </div>
          <div className=" bg-white ">
            <div className="container">
              <p className="display-4 text-center" style={{ paddingTop: "0.5em" }}>
                Novare Club
              </p>
              <p className="fw-light text-center">IIT PALAKKAD</p>
              <img
                className="rounded container my-1"
                src={Nature2}
                alt=""
              />

              <div className="fs-5">
                <p className="p-3">
                  Welcome to Novare, the Trekking and Adventure Club of IIT
                  Palakkad! Started as a bunch of friends interested in
                  adventures now we have a dedicated team and over 200 student
                  members, who are passionate about exploring the breathtaking
                  beauty of the Western Ghats and organizing thrilling treks and
                  adventures for our members.
                </p>
                <h5 className="text-center">OUR Vision</h5>
                <ul className="fs-5 list-group list-group-flush p-3">
                  <li className="list-group-item">
                    INSTILLING LOVE AND PASSION FOR TREKKING AND NATURE AMONG
                    THE STUDENT COMMUNITY
                  </li>
                  <li className="list-group-item">
                    MAKING THEM INDEPENDENT WHILE EMBRACING TEAMWORK AND
                    LEADERSHIP
                  </li>
                  <li className="list-group-item">
                    BEING A SUSTAINABLE AND ECO FRIENDLY TRAVELLER
                  </li>
                </ul>

                <p className="p-3">
                  At Novare, we believe in the transformative power of nature
                  and adventure. We strive to provide unforgettable experiences
                  that not only challenge our members physically but also
                  nurture a deep appreciation for the natural wonders around us.
                  Through our treks and adventures, we aim to inspire a sense of
                  adventure, foster camaraderie, and promote a sustainable
                  approach to outdoor exploration.
                </p>
                <p className="p-3">
                  Our treks in the Western Ghats take you through lush forests,
                  picturesque valleys, and awe-inspiring peaks. From
                  beginner-friendly trails to more challenging expeditions, we
                  offer a range of trekking options to suit different skill
                  levels and preferences. Each trek is carefully crafted to
                  showcase the natural beauty of the region and provide
                  opportunities for personal growth and self-discovery.
                </p>

                <p className="p-3">
                  As a member of Novare, you'll have access to a vibrant student
                  community of like-minded adventurers who share a passion for
                  exploration. We organize regular meetups, workshops, and
                  training sessions to enhance your trekking skills, build
                  resilience, and foster a spirit of teamwork and unity.
                </p>
                <p className="mb-0 p-3">
                  Join us at Novare and embark on a journey of a lifetime.
                  Experience the thrill of conquering new heights, forging
                  lifelong friendships, and connecting with nature in ways
                  you've never imagined. Get ready to challenge yourself,
                  explore the Western Ghats, and create memories that will last
                  a lifetime.
                </p>
                <div className="p-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="py-5">This is about us page</h1> */}
    </>
  );
}
