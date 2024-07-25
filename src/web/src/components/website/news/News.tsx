import React from "react";
import { NavLink } from "react-router-dom";

const News: React.FC = () => {
  return (
    <>
      {/* LATEST NEWS */}
      <section className="section-primary pb-120">
        <div className="container">
          <div className="section-header">
            <h2>Latest news</h2>
            <span>~ Great articles ~</span>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-4.jpg" alt="" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">20</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border bg-1">
                  <h5>
                    <NavLink to="/blog-single">On the other hand</NavLink>
                  </h5>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque.
                  </p>
                  <NavLink to="/blog-single" className="au-btn__readmore">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="post">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-5.jpg" alt="" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">16</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border bg-2">
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
            <div className="col-md-6 col-lg-4">
              <div className="post mb-0">
                <div className="post-thumb">
                  <NavLink to="/blog-single">
                    <img src="/src/assets/images/post-thumb-6.jpg" alt="" />
                  </NavLink>
                  <div className="post-date">
                    <div className="inner">
                      <span className="date">10</span>
                      <span className="month">June</span>
                    </div>
                  </div>
                </div>
                <div className="post-body has-border bg-3">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
