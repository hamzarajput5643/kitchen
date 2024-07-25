import React from "react";

const Page404: React.FC = () => {
  return (
    <>
      <main>
        {/* 404 PAGE */}
        <section className="error set-bg" data-image-src="/src/assets/images/404-bg.jpg">
          <div className="inner">
            <span>404</span>
            <h3>Page not found</h3>
            <p>
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <a
              href="index.html"
              className="au-btn au-btn--hover round has-bd extra-long"
            >
              Back to homepage
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page404;
