import BlogDetailsPage from "@/components/BlogDetails/BlogDetailsPage";
import CtaOne from "@/components/CtaOne/CtaOne";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import Layout from "@/components/Layout/Layout";
import React from "react";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Subscription Manager">
      <InnerBanner title="Software product Details" />
      <BlogDetailsPage />
      <CtaOne />
    </Layout>
  );
};

export default BlogDetails;
