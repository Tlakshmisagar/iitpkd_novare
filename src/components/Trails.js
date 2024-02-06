import TrailCard from "./TrailCard";
import dhoni from "../images/dhoni.jpg"
import chimmony from "../images/chimmony.jpg"
import munnar from "../images/munnar.jpg"
import { motion } from "framer-motion"
export default function Trails() {
  return (
    <>
      <motion.div className="py-4 z-2 position-relative bg-white" initial={{x:-1000, opacity: 0}} animate={{x:0, opacity: 1}} exit={{x:1000, opacity: 0}} transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}>
        <div className="container position-relative z-2 bg-white">
          <div className="row row-cols-1 row-cols-md-3 g-4 text-center pt-4">
            <TrailCard trailLink="/dhoni" picurl={dhoni} title="Dhoni Waterfalls Trek"/>
            <TrailCard trailLink="/chimmony" picurl={chimmony} title="Chimmony Waterfalls Trek"/>
            <TrailCard trailLink="/munnar" picurl={munnar} title="Munnar"/>
            <TrailCard trailLink="/nelliyampathy" picurl="https://lh5.googleusercontent.com/p/AF1QipPgdrLV5mKrSPjqQ1Ro5peoR0SSKD2MOxd1ZKdT=w540-h312-n-k-no" title="Nelliyampathy"/>
          </div>
        </div>
      </motion.div>
    </>
  );
}
