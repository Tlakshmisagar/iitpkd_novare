import ProfileCard from "./ProfileCard";
export default function Team() {
  return (
    <div className="z-2 position-relative bg-white">
      <div className="py-4"></div>
      <div className="row row-cols-1 row-cols-md-4 g-4 text-center pt-3">
        <ProfileCard
          photo=""
          name="Dr. Vishwas V"
          role="Faculty Mentor"
          desc="Trails winding through woods, Lens captures nature's wonders, Hiking with purpose."
          email="vishwas@iitpkd.ac.in"
          insta="insta-test"
        />
        <ProfileCard
          photo=""
          name="Haripriya S"
          role="Club Head "
          desc="Adventures in the mountains makes us high enough to uplift our soul and cross our limits in the healthiest way."
          email="102001009@smail.iitpkd.ac.in"
          insta="https://instagram.com/abq1445?igshid=NGExMmI2YTkyZg=="
        />
        <ProfileCard
          photo=""
          name="Ajay Kumar Isampalli "
          role="Trip coordinator"
          desc="I always love to captivate tapestry of life and beauty, where Earth's wonders unfold, and serenity embraces the soul."
          email="122001017@smail.iitpkd.ac.in"
          insta="https://instagram.com/ajay_kumar_isampalli?igshid=MzNlNGNkZWQ4Mg=="
        />
        <ProfileCard
          photo=""
          name="K.Aishwarya "
          role="Trip coordinator"
          desc="Trekking is an adventure that allows me to connect with nature and discovering breathtaking landscapes and fuels my sense of exploration. "
          email="102001014@smail.iitpkd.ac.in"
          insta="https://instagram.com/aishu_01._?igshid=MzNlNGNkZWQ4Mg=="
        />
        <ProfileCard
          photo=""
          name="Cipriyano Simoes"
          role="Trip coordinator"
          // modify desc
          desc={`Trekking opens our minds and broadens our perspectives, inviting us to embrace new cultures, experiences, and connections, ultimately enriching our lives with unforgettable memories and a deeper understanding of the world. It's like "Travel nahi kiya toh kya kiya ?"`}
          email="112204005@smail.iitpkd.ac.in"
          //need id
          insta="https://www.instagram.com/cipriyanoc"
        />
        <ProfileCard
          photo=""
          name="Shubham Kumar"
          role="Trip Coordinator, Web-developer"
          desc="I love that moment in a hike when you snap to and suddenly realise for the last 10 minutes you’ve not been observing nature but have instead become a part of it."
          email="102001032@smail.iitpkd.ac.in"
          //need id
          insta="https://www.instagram.com/shubham_kr"
        />
        <ProfileCard
          photo=""
          name="Lakhpat Meena "
          role="Creative team member"
          desc="You are passionate about trekking because it makes you realise from the bottom of the heart that nothing can match the beauty of nature, gives us peace of mind, keep our spirits high , makes our soul happy,and also make us realise we are just babies crawling in the lap of mighty nature"
          email="132001020@smail.iitpkd.ac.in"
          insta="https://instagram.com/lakhpat_meena_?igshid=MzNlNGNkZWQ4Mg=="
        />
        <ProfileCard
          photo=""
          name="Subhash"
          role="Creative Team member"
          desc="A nature enthusiastic who finds bliss in travelling."
          // need id 
          email="122001009@smail.iitpkd.ac.in"
          insta="https://www.instagram.com/arigela_subhash"
        />
        <ProfileCard
          photo=""
          name="KUMBA SIVA "
          role="Creative Team member"
          desc="Enjoy the nature 😀#trekking"
          email="102001015@smail.iitpkd.ac.in"
          insta="https://instagram.com/shiva09.ks?igshid=MzNlNGNkZWQ4Mg=="
        />
        <ProfileCard
          photo=""
          name="Akhilesh Meena "
          role="Design Team member "
          desc="I am B20 Civil student. I am fearless person and I am good in trekking I have lot of experience in it. I love trekking bcz It helps you to energize yourself and fill yourself with positivity."
          email="102001004@smail.iitpkd.ac.in"
          insta="https://instagram.com/officially_akhilesh?igshid=MzNlNGNkZWQ4Mg=="
        />
        <ProfileCard
          photo=""
          name="Priyam Kailash"
          role="Design Team member, Video editor"
          desc="A Wacky Engineer with a Bug of Design!"
          email="122001038@smail.iitpkd.ac.in"
          insta="https://www.instagram.com/priyamkailash"
        />
        <ProfileCard
          photo=""
          name="P S HARIKRISHNAN"
          role="Founder"
          desc="A pursuit of the new and the self. "
          email="hps1991@gmail.com"
          insta="https://instagram.com/_harikrishnan_ps_?igshid=ZDc4ODBmNjlmNQ=="
        />
      </div>
    </div>
  );
}
