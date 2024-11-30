import React from "react";
import DocRoot from "@theme-original/DocRoot";

export default function DocRootWrapper(props) {
  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <DocRoot {...props} />
      </div>
    </>
  );
}
