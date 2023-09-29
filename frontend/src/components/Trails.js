import TrailCard from "./TrailCard";
export default function Trails() {
  return (
    <>
      <div className="py-5 z-2 position-relative bg-white">
        <div className="container position-relative z-2 bg-white">
          <div className="row row-cols-1 row-cols-md-3 g-4 text-center pt-5">
            <TrailCard picurl="https://drive.google.com/uc? export=view&id=19-hUqrzWS4s49myhyry7PRbu2mJ6obF7" title="Dhoni Waterfalls Trek"/>
            <TrailCard picurl="https://drive.google.com/uc? export=view&id=1U0ThE56RcQrWHkjFWyhhu_kTzXAWsLVf" title="Chimmony Waterfalls Trek"/>
            <TrailCard picurl="https://drive.google.com/uc? export=view&id=1516hno68CAeJoE5mgcWmW8iZH3zdZfeu" title="Munnar"/>
            <TrailCard picurl="https://drive.google.com/uc? export=view&id=19-hUqrzWS4s49myhyry7PRbu2mJ6obF7" title="Nelliyampathy"/>
          </div>
        </div>
      </div>
    </>
  );
}
