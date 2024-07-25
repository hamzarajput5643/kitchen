import React from "react";
import { NavLink } from "react-router-dom";

const BlogsContent: React.FC = () => {
  return (
    <>
      <section className="section-primary pt-150 pb-120 blog-masonry wide">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-4.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">20</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">On the other hand</NavLink>
                  </h5>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis prae-sentium voluptatum deleniti atque.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-17.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">18</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">Contrary to popular</NavLink>
                  </h5>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-6.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">16</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">This book is a treatise</NavLink>
                  </h5>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-24.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">13</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">
                      Ut enim ad minima veniam
                    </NavLink>
                  </h5>
                  <p>
                    If you use this site regularly and would like to help keep
                    the site on the Internet, please consider donating.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-18.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">12</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">Lorem ipsum dolor sit</NavLink>
                  </h5>
                  <p>
                    On the other hand, we denounce with righ-teous indignation
                    and dislike men who are so beguiled and demoralized.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-19.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">10</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">Excepteur sint occaecat</NavLink>
                  </h5>
                  <p>
                    These cases are perfectly simple and easy to distinguish. In
                    a free hour, when our power of choice is untrammelled.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-20.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">09</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">Duis aute irure dolor</NavLink>
                  </h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry'.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-25.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">07</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">But I must explain</NavLink>
                  </h5>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-21.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">06</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">Sed ut perspiciatis unde</NavLink>
                  </h5>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-22.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">05</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">Nemo enim ipsam volup</NavLink>
                  </h5>
                  <p>
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                    amet..", comes from a line in section accompanied.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-23.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">03</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="/blog-single">Neque porro quisquam</NavLink>
                  </h5>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xxl-3">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-26.jpg" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">01</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border">
                  <h5>
                    <NavLink to="blog-single">Nor again is there anyone</NavLink>
                  </h5>
                  <p>
                    Lorem Ipsum is therefore always free from repetition,
                    injected humour, or non-characteristic words etc.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-holder">
            <NavLink to="#" className="au-btn round has-bg au-btn--hover short">
              Load more
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsContent;
