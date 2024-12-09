import React from "react";
export default function ContentWrapper(props) {
  return (
    <>
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
          src={require("@site/static/img/postnord_logo_light.svg").default}
          alt="404"
          height="200px"
        />
        <h1>Oops! Wrong Turn!</h1>
        <p>The page you're looking for seems to have spun off the track.</p>
      </div>
    </>
  );
}
