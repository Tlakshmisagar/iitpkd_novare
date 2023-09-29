import { Link } from "react-router-dom";

export default function ArticleCard() {
    
    return (<div className="row g-0 bg-body-secondary position-relative my-5 shadow-lg">
    <div className="col-md-6 mb-md-0 p-md-4">
      <img src=" https://drive.google.com/uc? export=view&id=1EUZ4I0REAdP2RSCq0fVGAJpN7GFTZjGK" className="w-100" alt="..."/>
    </div>
    <div className="col-md-6 p-4 ps-md-0">
      <h5 className="mt-0">Why being fit matters for trekking?</h5>
      <p>Trekking is an exciting outdoor activity that lets you explore nature and push your limits. To fully enjoy trekking, it's important to be physically fit.</p>
      <p className="text-truncate">In this blog, we'll discuss why fitness is crucial for trekking and how it can enhance your overall experience.</p>
      <Link to="#" className="btn btn-outline-info rounded-pill">Read More</Link>
    </div>
  </div>);
}