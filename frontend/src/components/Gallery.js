import Nature from "../images/nature1.jpg";
export default function Gallery() {
    return (
        <div className="z-2 position-relative bg-white">

            <div className="py-5"></div>
            <div className="container position-relative">
                <div className="card text-bg-dark text-center">
                    <img src={Nature} className="card-img" alt="..." />
                    <div className="card-img-overlay ">
                        <h5 className="card-title">Gallery</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}