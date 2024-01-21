import ProfileCard from "./ProfileCard";
import Nature from "../images/nature1.jpg";
import Harikrishnan from "../images/P_S_Harikrishnan.jpeg"
import Haripriya from "../images/haripriya.JPG"
import Meena from "../images/Akhilesh_Meena.jpeg"
import Shiva from "../images/Shiva_Kumba.jpg"
import Ajay from "../images/Ajay_Kumar.jpg"
import Aishwarya from "../images/Aishwarya_Kase.jpg"
import Shubash from "../images/Subhash.jpg"
import Priyam from "../images/Priyam_Kailash.JPG"
import Cipriyano from "../images/CIPRIYANO_SIMOES.jpg"
import Vishwas from "../images/Vishwas_Vasisht.jpeg"
import Lakhpat from "../images/Lakhpat_Meena.jpg"
import Shubham from "../images/Shubham_Kumar.jpg"
import Anusha from "../images/Anusha_Dadam.jpg"
import Srinivas from "../images/SRINIVAS_RAMAVATH.jpg"
import Parvat from "../images/parvat.jpg"
import Venkatesh from "../images/VENKATESH_M.jpg"
import Varun from "../images/Varun.jpg"
import Prashant from "../images/Prashant_Sharma.jpg"
import Ashish from "../images/Ashish.jpg"
import Aditya from "../images/ADITYA_GUPTA.jpeg"
import { useState } from "react";

export default function Team() {
  const tripCoordinators = [
    {
      photo: Ajay,
      name: "Ajay Kumar Isampalli",
      role: "Trip coordinator",
      // desc: "I always love to captivate tapestry of life and beauty, where Earth's wonders unfold, and serenity embraces the soul.",
      // email: "122001017@smail.iitpkd.ac.in",
      // insta:
      //   "https://instagram.com/ajay_kumar_isampalli?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Aishwarya,
      name: "K.Aishwarya",
      role: "Trip coordinator",
      // desc: "Trekking is an adventure that allows me to connect with nature and discovering breathtaking landscapes and fuels my sense of exploration.",
      // email: "102001014@smail.iitpkd.ac.in",
      // insta: "https://instagram.com/aishu_01._?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Cipriyano,
      name: "Cipriyano Simoes",
      role: "Trip coordinator",
      // desc: `Trekking opens our minds and broadens our perspectives, inviting us to embrace new cultures, experiences, and connections, ultimately enriching our lives with unforgettable memories and a deeper understanding of the world. It's like "Travel nahi kiya toh kya kiya ?"`,
      // email: "112204005@smail.iitpkd.ac.in",
      // insta: "https://www.instagram.com/cipriyanoc",
    },
    {
      photo: Shubham,
      name: "Shubham Kumar",
      role: "Trip Coordinator",
      // desc: "I love that moment in a hike when you snap to and suddenly realise for the last 10 minutes you’ve not been observing nature but have instead become a part of it.",
      // email: "102001032@smail.iitpkd.ac.in",
      // insta: "https://www.instagram.com/shubham_kr",
    },
    {
      photo: Aditya,
      name: "Aditya Kumar Gupta",
      role: "Trip coordinator",
      // desc: "I always love to captivate tapestry of life and beauty, where Earth's wonders unfold, and serenity embraces the soul.",
      // email: "122001017@smail.iitpkd.ac.in",
      // insta:
      //   "https://instagram.com/ajay_kumar_isampalli?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Srinivas,
      name: "R.srinivas",
      role: "Trip coordinator",
      // desc: "I always love to captivate tapestry of life and beauty, where Earth's wonders unfold, and serenity embraces the soul.",
      // email: "122001017@smail.iitpkd.ac.in",
      // insta:
      //   "https://instagram.com/ajay_kumar_isampalli?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Anusha,
      name: "Anusha dadam ",
      role: "Trip coordinator",
      // desc: "I always love to captivate tapestry of life and beauty, where Earth's wonders unfold, and serenity embraces the soul.",
      // email: "122001017@smail.iitpkd.ac.in",
      // insta:
      //   "https://instagram.com/ajay_kumar_isampalli?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Varun,
      name: "Varun Sai ",
      role: "Trip coordinator"
    }
  ];

  const creativeTeam = [
    {
      photo: Lakhpat,
      name: "Lakhpat Meena",
      role: "Creative team member",
      // desc: "You are passionate about trekking because it makes you realise from the bottom of the heart that nothing can match the beauty of nature, gives us peace of mind, keep our spirits high, makes our soul happy, and also make us realise we are just babies crawling in the lap of mighty nature",
      // email: "132001020@smail.iitpkd.ac.in",
      // insta: "https://instagram.com/lakhpat_meena_?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Shubash,
      name: "Subhash",
      role: "Creative Team member",
      // desc: "A nature enthusiast who finds bliss in travelling.",
      // email: "122001009@smail.iitpkd.ac.in",
      // insta: "https://www.instagram.com/arigela_subhash",
    },
    {
      photo: Shiva,
      name: "KUMBA SIVA",
      role: "Creative Team member",
      // desc: "Enjoy the nature 😀#trekking",
      // email: "102001015@smail.iitpkd.ac.in",
      // insta: "https://instagram.com/shiva09.ks?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Venkatesh,
      name: "M Venkatesh ",
      role: "Creative Team member",
      // desc: "Enjoy the nature 😀#trekking",
      // email: "102001015@smail.iitpkd.ac.in",
      // insta: "https://instagram.com/shiva09.ks?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Prashant,
      name: "Prashant Sharma",
      role: "Creative Team member",
      // desc: "Enjoy the nature 😀#trekking",
      // email: "102001015@smail.iitpkd.ac.in",
      // insta: "https://instagram.com/shiva09.ks?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Ashish,
      name: "Ashish Singh ",
      role: "Creative Team member",
      // desc: "Enjoy the nature 😀#trekking",
      // email: "102001015@smail.iitpkd.ac.in",
      // insta: "https://instagram.com/shiva09.ks?igshid=MzNlNGNkZWQ4Mg==",
    },
  ];

  const designTeam = [
    {
      photo: Prashant,
      name: "Prashant Sharma",
      role: "Design Team member",
      // desc: "I am B20 Civil student. I am a fearless person and I am good in trekking. I have a lot of experience in it. I love trekking because it helps you to energize yourself and fill yourself with positivity.",
      // email: "102001004@smail.iitpkd.ac.in",
      // insta:
      //   "https://instagram.com/officially_akhilesh?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Priyam,
      name: "Priyam Kailash",
      role: "Design Team member, Video editor",
      // desc: "A Wacky Engineer with a Bug of Design!",
      // email: "122001038@smail.iitpkd.ac.in",
      // insta: "https://www.instagram.com/priyamkailash",
    },
    {
      photo: Venkatesh,
      name: "M Venkatesh ",
      role: "Design Team member",
      // desc: "I am B20 Civil student. I am a fearless person and I am good in trekking. I have a lot of experience in it. I love trekking because it helps you to energize yourself and fill yourself with positivity.",
      // email: "102001004@smail.iitpkd.ac.in",
      // insta:
      //   "https://instagram.com/officially_akhilesh?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      photo: Meena,
      name: "Akhilesh Meena",
      role: "Design Team member"
    }
  ];

  const facultyAdvisor = [
    {
      photo: Vishwas,
      name: "Dr. Vishwas V. ",
      role: "Faculty Mentor",
      // desc: "A pursuit of the new and the self.",
      // email: "hps1991@gmail.com",
      // insta: "https://instagram.com/_harikrishnan_ps_?igshid=ZDc4ODBmNjlmNQ==",
    },
  ];

  const socialMedia = [
    {
      photo: Parvat,
      name: "Parvat",
      role: "Social media manager",
      // desc: "Trails winding through woods, Lens captures nature's wonders, Hiking with purpose.",
    },
  ];

  const [Group, setGroup] = useState(tripCoordinators);
  return (
    <div>
      <img
        className="img-fluid position-fixed top-0"
        src={Nature}
        alt="something"
      />

      <div className="z-2 position-relative">
        <div className="text-white text-center container">
          <p className="display-3 " style={{ paddingTop: "14rem" }}>
            Team Novare
          </p>
          <p className="m-auto fw-light" style={{ paddingBottom: "7rem" }}>
            Meet the team
          </p>
        </div>

        <div className="bg-white pt-3">
          <div className="container">
            <div className="row mt-5 m-mt-2">
              <div className="col-lg-7 col-md-12">
                <h1 className="title-h1 border-bottom-custom mb-3 pb-2 m-d-none">
                  Team Novare
                </h1>
                {/* <p className="p-text-1 m-border-bottom m-mb-2 mb-5">
                  <b>
                    Interesting, innovative, involving, demanding but never
                    boring.{" "}
                  </b>
                </p> */}
                <div className="">
                  <p className="z-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                    soluta aperiam rerum animi, totam blanditiis est reiciendis
                    ipsam omnis eaque laboriosam molestiae culpa labore delectus
                    ipsa facere. Fugit, porro animi!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam magnam officiis quod nam aspernatur ut dolor, repellat
                    ex sint labore distinctio numquam, saepe laboriosam
                    praesentium eos error tempora perspiciatis. Sint!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint commodi quasi impedit doloribus! Numquam dignissimos
                    dicta possimus eos qui! Deserunt voluptatem cupiditate
                    labore alias, architecto inventore et amet recusandae
                    officia!
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="h-100">
                  <div className="d-flex align-items-center justify-content-center h-100 img-fluid">
                    <div>
                      <div className="mx-4 mt-5">
                        <div className="founder_image cursor-pointer">
                          <img
                            src={Harikrishnan}
                            alt="img"
                            className=" cursor-pointer"
                            style={{width: '250px' ,height:'auto'}}
                          />
                        </div>
                        <p className="p-text-2-franklin text-center mb-0 pt-2">
                          P S Harikrishan
                        </p>
                        <p className="p-text-3 text-center">Founder</p>
                      </div>
                    </div>
                    <div>
                      <div className="mx-4 mt-5">
                        <div className="founder_image cursor-pointer ">
                        <img
                            src={Haripriya}
                            alt="img"
                            className=" cursor-pointer"
                            style={{width: '250px' ,height:'auto'}}
                          />
                        </div>
                        <p className="p-text-2-franklin text-center mb-0 pt-2">
                          Haripriya S
                        </p>
                        <p className="p-text-3 text-center">Club Head</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="container ">
            <div>
              <ul className="teams_tab nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => setGroup(tripCoordinators)}
                  >
                    Trip coordinator
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => setGroup(designTeam)}
                  >
                    Design team
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => setGroup(creativeTeam)}
                  >
                    Creative team
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => setGroup(socialMedia)}
                  >
                    Social media manager
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link"
                    onClick={() => setGroup(facultyAdvisor)}
                  >
                    Faculty advisor
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="container ">
            <div className="row row-cols-1 row-cols-md-4 g-4 text-center p-3 bg-white">
              {Group.map((member, index) => (
                <ProfileCard
                  key={index}
                  photo={member.photo}
                  name={member.name}
                  role={member.role}
                  desc={member.desc}
                  email={member.email}
                  insta={member.insta}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
