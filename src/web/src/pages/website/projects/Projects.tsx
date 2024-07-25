import ProjectDetails from "@app/components/website/projectDetails/ProjectDetails";
import React from "react";

const Projects: React.FC = () => {
  return (
    <>
      <main>
        {/* PAGE BREADCRUMB */}
        <section className="page-breadcrumb">
          <div className="container">
            <div className="row justify-content-between align-content-center">
              <div className="col-md-auto">
                <h3>Nam libero tempore</h3>
              </div>
              <div className="col-md-auto">
                <ul className="au-breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">Gallery Portfolio Lists</a>
                  </li>
                  <li>
                    <a href="#">Nam libero tempore</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div>
            <ProjectDetails/>
        </div>
      </main>
    </>
  );
};

export default Projects;
