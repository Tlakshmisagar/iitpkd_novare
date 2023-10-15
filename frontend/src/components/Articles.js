import ArticleCard from "./ArticleCard";
import article1 from "../images/article1.jpg"
export default function Articles() {
  return (
    <div className="z-2 position-relative bg-white">
      <div className="container position-relative">
        <div className="pt-3"></div>
        <ArticleCard picurl={article1} articleLink="/article1" title="Why being fit matters for trekking?" desc="Trekking is an exciting outdoor activity that lets you explore nature and push your limits. To fully enjoy trekking, it's important to be physically fit." trundesc="In this blog, we'll discuss why fitness is crucial for trekking and how it can enhance your overall experience."/>
        <ArticleCard/>
        <ArticleCard/>
        </div>
      </div>
  );
}
