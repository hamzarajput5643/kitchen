import BlogsSinglePageContent from "@app/components/website/blogsSinglePageContent/BlogsSinglePageContent";
import React from "react";

const BlogsSinglePage: React.FC = () => {
  return (
    <>
      <main>
        {/* PAGE INFO */}
        <section
          className="page-info-7 set-bg"
          data-image-src="/src/assets/images/page-info-bg-4.jpg"
        >
          <div className="section-header">
            <h1 className="text-white">Blog Single</h1>
            <span>~ The things you want to find ~</span>
          </div>
        </section>
        <div>
            <BlogsSinglePageContent/>
        </div>
      </main>
    </>
  );
};

export default BlogsSinglePage;
