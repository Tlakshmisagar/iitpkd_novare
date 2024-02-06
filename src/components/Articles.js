import ArticleCard from "./ArticleCard";
import article1 from "../images/article1.jpg"
import { motion } from "framer-motion"
export default function Articles() {
  return (
    <motion.div className="z-2 position-relative bg-white" initial={{x:-1000, opacity: 0}} animate={{x:0, opacity: 1}} exit={{x:1000, opacity: 0}} transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}>
      <div className="container position-relative">
        <div className="pt-3"></div>
        <ArticleCard picurl={article1} articleLink="/article1" title="Why being fit matters for trekking?" desc="Trekking is an exciting outdoor activity that lets you explore nature and push your limits. To fully enjoy trekking, it's important to be physically fit." trundesc="In this blog, we'll discuss why fitness is crucial for trekking and how it can enhance your overall experience."/>
        <ArticleCard/>
        <ArticleCard/>
        </div>
      </motion.div>
  );
}
