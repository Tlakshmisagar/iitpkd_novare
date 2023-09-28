import Nature from "../images/nature1.jpg";
export default function About() {
  return (
    <>
      <div className="container">
      <img
        className="img-fluid" 
        src={Nature} alt="something" 
      />
        <h3 className="mt-1 mb-0">NOVARE CLUB</h3>
        <p className="m-auto">IIT Palakkad</p>
        

        <h5>OUR Vision</h5>
        <ul>
          <li>
            INSTILLING LOVE AND PASSION FOR TREKKING AND NATURE AMONG THE
            STUDENT COMMUNITY
          </li>
          <li>
            MAKING THEM INDEPENDENT WHILE EMBRACING TEAMWORK AND LEADERSHIP
          </li>
          <li>BEING A SUSTAINABLE AND ECO FRIENDLY TRAVELLER</li>
        </ul>

        <p>
          Welcome to Novare, the Trekking and Adventure Club of IIT Palakkad!
          Started as a bunch of friends interested in adventures now we have a
          dedicated team and over 200 student members, who are passionate about
          exploring the breathtaking beauty of the Western Ghats and organizing
          thrilling treks and adventures for our members.
        </p>

        <p>
          At Novare, we believe in the transformative power of nature and
          adventure. We strive to provide unforgettable experiences that not
          only challenge our members physically but also nurture a deep
          appreciation for the natural wonders around us. Through our treks and
          adventures, we aim to inspire a sense of adventure, foster
          camaraderie, and promote a sustainable approach to outdoor
          exploration.
        </p>
        <p>
          Our treks in the Western Ghats take you through lush forests,
          picturesque valleys, and awe-inspiring peaks. From beginner-friendly
          trails to more challenging expeditions, we offer a range of trekking
          options to suit different skill levels and preferences. Each trek is
          carefully crafted to showcase the natural beauty of the region and
          provide opportunities for personal growth and self-discovery.
        </p>
        <p>
          As a member of Novare, you'll have access to a vibrant student
          community of like-minded adventurers who share a passion for
          exploration. We organize regular meetups, workshops, and training
          sessions to enhance your trekking skills, build resilience, and foster
          a spirit of teamwork and unity.
        </p>
        <p>
          Join us at Novare and embark on a journey of a lifetime. Experience
          the thrill of conquering new heights, forging lifelong friendships,
          and connecting with nature in ways you've never imagined. Get ready to
          challenge yourself, explore the Western Ghats, and create memories
          that will last a lifetime.
        </p>
      </div>
      {/* <h1 className="py-5">This is about us page</h1> */}
    </>
  );
}
