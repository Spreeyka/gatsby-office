import * as React from "react";
import Layout from "../components/layout/Layout";
import Frontview from "../components/frontview/frontview";
import SimpleReactLightbox from "simple-react-lightbox";

const IndexPage = () => {
  return (
    <SimpleReactLightbox>
      <Layout>
        <Frontview></Frontview>
      </Layout>
    </SimpleReactLightbox>
  );
};

export default IndexPage;
