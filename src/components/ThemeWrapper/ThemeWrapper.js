import { RallyThemeProvider } from "@easyparkgroup/rally-web";
import Dropdown from "../Dropdown/Dropdown";
import React, { useState } from "react";
import { Button } from "@easyparkgroup/rally-web";
import { useColorMode } from "@docusaurus/theme-common";

const ThemeWrapper = ({ children, showDropdown = true }) => {
  const [brand, setBrand] = useState("easy-park");

  const { colorMode, setColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const handleToggle = () => {
    setColorMode(isDarkMode ? "light" : "dark");
  };

  return (
    <>
      {showDropdown && (
        <Dropdown selectedBrand={brand} onBrandChange={setBrand} />
      )}
      {/* <Button color="semantic.on-info-container" onClick={handleToggle}>
          {isDarkMode ? "Light" : "Dark"}
        </Button> */}
      <RallyThemeProvider isDarkMode={isDarkMode} brand={brand}>
        {children}
      </RallyThemeProvider>
    </>
  );
};

export default ThemeWrapper;
