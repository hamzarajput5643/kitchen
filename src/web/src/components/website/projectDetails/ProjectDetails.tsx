import React from "react";

const ProjectDetails: React.FC = () => {
  return (
    <>
      {/* PROJECT */}
      <section className="section-primary project pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="project-image">
                <div className="image-holder">
                  <img src="/src/assets/images/project-1.jpg" />
                </div>
                <div className="row image-row">
                  <div className="col-md-6">
                    <div className="image-holder">
                      <img src="/src/assets/images/project-2.jpg" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image-holder">
                      <img src="/src/assets/images/project-3.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="project-content">
                <h4>Project Name</h4>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined.
                </p>
                <div className="info">
                  <div className="info-item">
                    <h6>CLIENT:</h6>
                    <span>The Standard Chunk</span>
                  </div>
                  <div className="info-item">
                    <h6>CATEGORY:</h6>
                    <a href="#">Fruit &amp; SeaFood</a>
                  </div>
                  <div className="info-item">
                    <h6>DATE:</h6>
                    <span>July 12, 2018</span>
                  </div>
                  <div className="info-item">
                    <h6>TAGS:</h6>
                    <a href="#">Food Recepies</a>
                  </div>
                </div>
                <div className="social">
                  <a href="#">
                    <i className="zmdi zmdi-twitter" />
                  </a>
                  <a href="#">
                    <i className="zmdi zmdi-facebook-box" />
                  </a>
                  <a href="#">
                    <i className="zmdi zmdi-linkedin" />
                  </a>
                  <a href="#">
                    <i className="zmdi zmdi-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-navigation">
            <a href="#" className="prev">
              <span className="lnr lnr-arrow-left" />
            </a>
            <a href="#" className="dots">
              <i className="zmdi zmdi-circle" />
              <i className="zmdi zmdi-circle" />
              <i className="zmdi zmdi-circle" />
              <i className="zmdi zmdi-circle" />
            </a>
            <a href="#" className="next">
              <span className="lnr lnr-arrow-right" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
