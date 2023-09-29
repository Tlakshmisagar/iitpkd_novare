import ArticleCard from "./ArticleCard";
export default function Articles() {
  return (
    <div className="z-2 position-relative bg-white">
      <div className="container position-relative">
        <div className="pt-3"></div>
        <ArticleCard/>
        <ArticleCard/>
        <ArticleCard/>
        </div>
      </div>
  );
}
