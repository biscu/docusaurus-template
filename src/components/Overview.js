import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

const Overview = ({ component, coverLight, coverDark }) => {
  return (
    <a href={`${component}`} className="no-underline">
      <div className="flex flex-col gap-3">
        <ThemedImage
          alt="Docusaurus themed image"
          className="rounded-2xl"
          sources={{
            light: useBaseUrl(coverLight),
            dark: useBaseUrl(coverDark),
          }}
        />
        <h2 className="capitalize">{component}</h2>
      </div>
    </a>
  );
};

export default Overview;
