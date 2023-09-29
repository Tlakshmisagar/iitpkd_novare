export default function Articles() {
  return (
    <div className="z-2 position-relative bg-white">
      <div className="container position-relative">
        <div className="pt-3"></div>
        <div class="card mb-3 mt-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img src=" https://drive.google.com/uc? export=view&id=1EUZ4I0REAdP2RSCq0fVGAJpN7GFTZjGK" class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8 align-self-center">
              <div class="card-body">
                <h5 class="card-title">Article: 1</h5>
                <p class="card-text">Why being fit matters for trekking ?</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 mt-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
