import React from "react";

const Services: React.FC = () => {
  return (
    <>
      {/* OUR BEST SERVICE */}
      <section className="section-primary our-service pb-120">
        <div className="container">
          <div className="section-header">
            <h2 className="text-white">Our Best Service</h2>
            <span>~ Experiences on food ~</span>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="our-service-col">
                <h3>- Serve -</h3>
                <img src="/src/assets/images/serve-white-icon.png" />
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="our-service-col">
                <h3>- Fresh food -</h3>
                <img src="/src/assets/images/fresh-food-white-icon.png" />
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="our-service-col mb-md-0">
                <h3>- Hot food -</h3>
                <img src="/src/assets/images/hot-food-white-icon.png" />
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="our-service-col mb-0">
                <h3>- Coffee -</h3>
                <img src="/src/assets/images/coffee-white-icon.png" />
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT US */}
      <section className="section-primary about-us pt-150 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pr-md-0">
              <div className="image-holder">
                <img src="/src/assets/images/about-us-3.jpg" />
              </div>
            </div>
            <div className="col-md-6 pl-md-0">
              <div className="about-us-col">
                <div className="section-header">
                  <h2>About us</h2>
                  <span className="fifth-color">~ For more add ~</span>
                </div>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum.
                </p>
                <a href="about-us.html" className="au-btn__readmore">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
