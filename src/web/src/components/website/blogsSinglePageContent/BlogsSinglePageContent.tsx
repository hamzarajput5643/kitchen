import React from "react";

const BlogsSinglePageContent: React.FC = () => {
  return (
    <>
      {/* BLOG STANDARD */}
      <section className="section-primary pt-150 pb-120 blog-standard">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="blog-single">
                <div className="post">
                  <div className="post-thumb">
                    <img src="/src/assets/images/blog-standard-1.jpg" />
                    <div className="post-date">
                      <div className="inner">
                        <span className="date">20</span>
                        <span className="month">June</span>
                      </div>
                    </div>
                  </div>
                  <div className="post-body">
                    <h4>Various versions have</h4>
                    <div className="post-meta">
                      <div className="post-author">
                        <a href="#" className="thumb">
                          <img src="/src/assets/images/author-avatar-1.png" />
                        </a>
                        By
                        <a href="#" className="name">
                          Andrea Silva
                        </a>
                      </div>
                      <div className="tagcloud">
                        <a href="#">Dresserts</a>
                        <a href="#">Cooking</a>
                        <a href="#">Food</a>
                      </div>
                    </div>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis volup-tas assumenda
                      est, omnis dolor repellendus. Temporibus autem quibusdam
                      et aut officiis debitis aut rerum necessitatibus saepe
                      eveniet ut et voluptates repudiandae sint et molestiae non
                      recusandae. Itaque earum rerum hic tenetur a sapiente
                      delectus, ut aut reiciendis voluptatibus maiores alias
                      consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                    <p className="quote">
                      <i className="fas fa-quote-left" />
                      These cases are perfectly simple and easy to distinguish.
                      In a free hour, when our power of choice is untrammelled
                      and when nothing prevents our being able to do what we
                      like best, every pleasure is to be welcomed and every pain
                      avoided. But in certain circumstances and owing to the
                      claims of duty or the obligations of business it will
                      frequently occur that pleasures have to be repudiated and
                      annoyances accepted.
                    </p>
                    <div className="group-image">
                      <h6>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </h6>
                      <div className="grid">
                        <div className="image-holder">
                          <img src="/src/assets/images/blog-single-1.jpg" />
                        </div>
                        <div className="image-holder">
                          <img src="/src/assets/images/blog-single-2.jpg" />
                        </div>
                        <div className="image-holder">
                          <img src="/src/assets/images/blog-single-3.jpg" />
                        </div>
                        <div className="image-holder">
                          <img src="/src/assets/images/blog-single-4.jpg" />
                        </div>
                      </div>
                    </div>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will
                    </p>
                    <div className="bottom">
                      <div className="share">
                        <span>Share:</span>
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
                      <a href="#" className="comment-count">
                        <span>3</span>
                        Coments
                      </a>
                    </div>
                    <div className="author-board">
                      <div className="inner">
                        <a href="#">
                          <img src="/src/assets/images/author-board.png" />
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua enim ad minim veniam
                        </p>
                        <h6>
                          <a href="#">Kathy Larson</a>
                        </h6>
                      </div>
                    </div>
                    <div className="post-navigation">
                      <div className="left navigation">
                        <a href="#" className="arrow">
                          <span className="lnr lnr-chevron-left" />
                        </a>
                        <div className="text">
                          <h6>
                            <a href="#">The wise man therefore</a>
                          </h6>
                          <span>Previous post</span>
                        </div>
                      </div>
                      <div className="right navigation">
                        <div className="text">
                          <h6>
                            <a href="#">The wise man therefore</a>
                          </h6>
                          <span>Next post</span>
                        </div>
                        <a href="#" className="arrow">
                          <span className="lnr lnr-chevron-right" />
                        </a>
                      </div>
                    </div>
                    <div className="comments-area" id="comments">
                      <h5 className="comments-title">Comments</h5>
                      <div className="comments-group">
                        <div className="comments-item">
                          <a href="#" className="thumb">
                            <img src="/src/assets/images/user-1.png" />
                          </a>
                          <div className="comments-content">
                            <div className="heading">
                              <h6>
                                <a href="#">Amber Reyes</a>
                              </h6>
                              <div className="comments-time">
                                March 28, 2018 at 9:12 am
                              </div>
                            </div>
                            <div className="body">
                              <p>
                                But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain
                                was born and I will give you a complete account
                                of the system, and expound the actual
                              </p>
                              <a href="#" className="reply">
                                <i className="zmdi zmdi-mail-reply-all" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* COMMENT LV2 */}
                        <div className="comments-group">
                          <div className="comments-item">
                            <a href="#" className="thumb">
                              <img src="/src/assets/images/user-2.png" />
                            </a>
                            <div className="comments-content">
                              <div className="heading">
                                <h6>
                                  <a href="#">Zachary Myers</a>
                                </h6>
                                <div className="comments-time">
                                  March 28, 2018 at 9:12 am
                                </div>
                              </div>
                              <div className="body">
                                <p>
                                  The generated Lorem Ipsum is therefore always
                                  free from repetition, injected humour, or
                                  non-characteristic words.
                                </p>
                                <a href="#" className="reply">
                                  <i className="zmdi zmdi-mail-reply-all" />
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comments-group">
                        <div className="comments-item">
                          <a href="#" className="thumb">
                            <img src="/src/assets/images/user-3.png" />
                          </a>
                          <div className="comments-content">
                            <div className="heading">
                              <h6>
                                <a href="#">Jeffrey Stephens</a>
                              </h6>
                              <div className="comments-time">
                                March 28, 2018 at 9:12 am
                              </div>
                            </div>
                            <div className="body">
                              <p>
                                Nor again is there anyone who loves or pursues
                                or desires to obtain pain of itself, because it
                                is pain, but because occasionally circumstances
                                occur in which toil and pain can procure.
                              </p>
                              <a href="#" className="reply">
                                <i className="zmdi zmdi-mail-reply-all" />
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comments-respond">
                      <h5>Post a Comments</h5>
                      <form method="get" className="comments-form">
                        <div className="form-holder">
                          <textarea
                            className="form-control"
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-holder">
                          <input
                            type="text"
                            className="form-control input-placeholder"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="form-holder">
                          <input
                            type="text"
                            className="form-control input-placeholder"
                            placeholder="Your Email"
                          />
                        </div>
                        <button className="au-btn round au-btn--hover has-bg">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sidebar">
                {/* PERSON */}
                <div className="widgets widget_person">
                  <div className="inner">
                    <img src="/src/assets/images/widget-person.png" />
                    <div className="widget-title">
                      <h6>Bryan Bennett</h6>
                      <span>Master Chef</span>
                    </div>
                    <img src="/src/assets/images/signature-3.png" />
                  </div>
                </div>
                {/* CATEGORIES */}
                <div className="widgets widget_categories">
                  <div className="widget-title">
                    <h5>Categories</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="#">
                        Seafood (<span>2</span>)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Coffee (<span>5</span>)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Restaurant (<span>18</span>)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Cupcake (<span>22</span>)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lunch (<span>19</span>)
                      </a>
                    </li>
                  </ul>
                </div>
                {/* LATEST POST */}
                <div className="widgets widget_recent_entries">
                  <div className="widget-title">
                    <h5>Latest post</h5>
                  </div>
                  <div className="latest-post">
                    <div className="latest-post__item">
                      <a href="#" className="thumb">
                        <img src="/src/assets/images/latest-post-thumb-1.png" />
                      </a>
                      <div className="heading">
                        <h6>
                          <a href="#">There many variations</a>
                        </h6>
                        <span>July 23, 2018</span>
                      </div>
                    </div>
                    <div className="latest-post__item">
                      <a href="#" className="thumb">
                        <img src="/src/assets/images/latest-post-thumb-2.png" />
                      </a>
                      <div className="heading">
                        <h6>
                          <a href="#">All the Lorem Ipsum</a>
                        </h6>
                        <span>July 23, 2018</span>
                      </div>
                    </div>
                    <div className="latest-post__item">
                      <a href="#" className="thumb">
                        <img src="/src/assets/images/latest-post-thumb-3.png" />
                      </a>
                      <div className="heading">
                        <h6>
                          <a href="#">The first line of Lorem</a>
                        </h6>
                        <span>July 23, 2018</span>
                      </div>
                    </div>
                    <div className="latest-post__item">
                      <a href="#" className="thumb">
                        <img src="/src/assets/images/latest-post-thumb-4.png" />
                      </a>
                      <div className="heading">
                        <h6>
                          <a href="#">The standard chunk</a>
                        </h6>
                        <span>July 23, 2018</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* INSTAGRAM */}
                <div className="widgets widget_instagram">
                  <div className="widget-title">
                    <h5>Follow instagram</h5>
                  </div>
                  <div className="row">
                    <div className="col-4 col-md-6 col-lg-4 col-holder">
                      <a href="#">
                        <img src="/src/assets/images/instagram-small-1.jpg" />
                      </a>
                    </div>
                    <div className="col-4 col-md-6 col-lg-4 col-holder">
                      <a href="#">
                        <img src="/src/assets/images/instagram-small-2.jpg" />
                      </a>
                    </div>
                    <div className="col-4 col-md-6 col-lg-4 col-holder">
                      <a href="#">
                        <img src="/src/assets/images/instagram-small-3.jpg" />
                      </a>
                    </div>
                    <div className="col-4 col-md-6 col-lg-4 col-holder">
                      <a href="#">
                        <img src="/src/assets/images/instagram-small-4.jpg" />
                      </a>
                    </div>
                    <div className="col-4 col-md-6 col-lg-4 col-holder">
                      <a href="#">
                        <img src="/src/assets/images/instagram-small-5.jpg" />
                      </a>
                    </div>
                    <div className="col-4 col-md-6 col-lg-4 col-holder">
                      <a href="#">
                        <img src="/src/assets/images/instagram-small-6.jpg" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* TAG CLOUD */}
                <div className="widgets widget_tag_cloud">
                  <div className="widget-title">
                    <h5>Tag Cloud</h5>
                  </div>
                  <div className="tagcloud">
                    <a href="#">Natural</a>
                    <a href="#">Fruits</a>
                    <a href="#">Dried</a>
                    <a href="#">Food fresh</a>
                    <a href="#">Natural</a>
                    <a href="#">Heathy</a>
                  </div>
                </div>
                {/* BANNER */}
                <div className="widgets widget_banner">
                  <a href="#">
                    <img src="/src/assets/images/widget-banner.jpg" />
                  </a>
                </div>
                {/* SEARCH */}
                <div className="widgets widget_search">
                  <form method="get" className="search-form">
                    <input
                      className="form-control"
                      type="text"
                      name="s"
                      id="s"
                      placeholder="Search"
                    />
                    <button className="search-icon">
                      <span className="lnr lnr-magnifier" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsSinglePageContent;
