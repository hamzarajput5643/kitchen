import React from "react";

const OurStory: React.FC = () => {
  return (
    <>
      {/* ABOUT US */}
      <section className="about-us">
        <div className="container">
          <div
            className="about-us-wrapper set-bg"
            data-image-src="/src/assets/images/about-us-bg.png"
          >
            <img
              src="/src/assets/images/about-us-1.jpg"
              className="about-us-1"
            />
            <div className="about-us-board">
              <div className="inner">
                <div className="heading">
                  <h2>Our Story</h2>
                  <img
                    src="/src/assets/images/border-5.png"
                    className="border-place"
                  />
                </div>
                <div className="body">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet.
                  </p>
                  <div className="end">
                    <img src="/src/assets/images/signature-2.png" />
                    <div className="name">
                      <h6>
                        <a href="#">Harry Price</a>
                      </h6>
                      <span>Restaurant Owners</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/src/assets/images/about-us-2.jpg"
              className="about-us-2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;
