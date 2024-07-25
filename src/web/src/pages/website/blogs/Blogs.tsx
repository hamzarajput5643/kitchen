import BlogsContent from "@app/components/website/blogsContent/BlogsContent";
import React from "react";

const Blogs: React.FC = () => {
  return (
    <>
      <main>
        {/* PAGE INFO */}
        <section
          className="page-info-6 set-bg"
          data-image-src="/src/assets/images/page-info-bg-4.jpg"
        >
          <div className="section-header">
            <h1 className="text-white">Blog Masonry</h1>
            <span>~ The things you want to find ~</span>
          </div>
        </section>
        <div>
            <BlogsContent/>
        </div>
      </main>
    </>
  );
};

export default Blogs;
