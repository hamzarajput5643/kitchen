import React from "react";

const Office: React.FC = () => {
  return (
    <>
      {/* CONTACT US */}
      <section className="contact-us section-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-us-content">
                <h3>Our office</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti.
                </p>
                <div className="contact-us-row row">
                  <div className="col-md-6">
                    <div className="contact-us-col">
                      <h5>NewYork</h5>
                      <div className="body">
                        <div className="address">
                          <span>No 40 Baria Sreet 133/2</span>
                          <span>NewYork 13589</span>
                        </div>
                        <div className="contact-info">
                          <a href="#">Email: kathryn-92@example.com</a>
                          <a href="tel:8494904283">Phone: (849) 490 4283</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-us-col">
                      <h5>Barcelona</h5>
                      <div className="body">
                        <div className="address">
                          <span>184 Main Collins Street West 8007</span>
                          <span>Barselona 23765</span>
                        </div>
                        <div className="contact-info">
                          <a href="#">Email: kathryn-92@example.com</a>
                          <a href="tel:8494904283">Phone: (849) 490 4283</a>
                        </div>
                      </div>
                    </div>
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
            <div className="col-md-6">
              <div className="contact-us-form">
                <form
                  action="includes/contact-form.php"
                  method="post"
                  className="js-contact-form"
                >
                  <div className="form-holder">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-holder">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                  <div className="form-holder">
                    <textarea
                      className="form-control"
                      placeholder="Leave Message"
                      name="message"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <button className="au-btn round has-bg medium au-btn--hover">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Office;
