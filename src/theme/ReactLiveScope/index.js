import React from "react";
import { Button } from "@easyparkgroup/rally-web";
import { RallyThemeProvider } from "@easyparkgroup/rally-web";
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Button,
  RallyThemeProvider,
};
export default ReactLiveScope;
