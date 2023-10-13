import { Link } from "react-router-dom";

export default function ArticleCard(props) {
    
    return (<div className="row g-0 bg-body-secondary position-relative my-5 shadow-lg">
    <div className="col-md-6 mb-md-0 p-md-4">
      <img src={props.picurl} className="w-100" alt="..."/>
    </div>
    <div className="col-md-6 p-4 ps-md-0">
      <h5 className="mt-0">{props.title}</h5>
      <p>{props.desc}</p>
      <p className="text-truncate">{props.trundesc}</p>
      <Link to={props.articleLink} className="btn btn-outline-info rounded-pill">Read More</Link>
    </div>
  </div>);
}