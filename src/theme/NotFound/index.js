import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function NotFoundWrapper(props) {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
          textAlign: "center",
        }}
      >
        <img
          src={require("@site/static/img/tire.png").default}
          alt="404"
          height="200px"
        />
        <h1>Oops! Wrong Turn!</h1>
        <p>The page you're looking for seems to have spun off the track.</p>
      </div>
    </Layout>
  );
}
