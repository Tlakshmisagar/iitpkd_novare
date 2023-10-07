import ProfileCard from "./ProfileCard";
export default function Team() {
  return (
    <div className="z-2 position-relative bg-white">
      <div className="py-4"></div>
      <div className="row row-cols-1 row-cols-md-4 g-4 text-center pt-3">
      <ProfileCard photo="https://drive.google.com/uc? export=view&id=1tncWZ2C7CCQyAqv9gbvQ6Ewk7SrlSLTC" name="Mohammad Adnan" role="Web Developer Head" desc="A web developer designs and builds websites and web applications, combining technical skills with creativity to create online experiences." email="112101028@smail.iitpkd.ac.in" insta="insta-test"/>
      <ProfileCard photo="" name="Mohammad Adnan" role="Web Developer Head" desc="A web developer designs and builds websites and web applications, combining technical skills with creativity to create online experiences." email="112101028@smail.iitpkd.ac.in" insta="insta-test"/>
      <ProfileCard photo="" name="Mohammad Adnan" role="Web Developer Head" desc="A web developer designs and builds websites and web applications, combining technical skills with creativity to create online experiences." email="112101028@smail.iitpkd.ac.in" insta="insta-test"/>
      <ProfileCard photo="" name="Mohammad Adnan" role="Web Developer Head" desc="A web developer designs and builds websites and web applications, combining technical skills with creativity to create online experiences." email="112101028@smail.iitpkd.ac.in" insta="insta-test"/>
      </div>
      
    </div>
  );
}
