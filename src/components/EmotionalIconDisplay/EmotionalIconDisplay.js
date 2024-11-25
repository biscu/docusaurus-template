import React, { useState } from "react";
import { Icon, Input } from "@easyparkgroup/rally-web";
import ThemeWrapper from "@site/src/components/ThemeWrapper/ThemeWrapper";

const iconNames = [
  "HidePassword",
  "ShowPassword",
  "Search",
  "Info",
  "Warning",
  "Important",
  "CloseCircle",
  "CloseLarge",

  // Add all other icon names here
];

const FunctionalIconDisplay = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIcons = iconNames.filter((iconName) =>
    iconName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Input
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ color: "red !important" }}
        />
        <ThemeWrapper showDropdown={false}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridColumnGap: "1rem",
              gridRowGap: "1rem",
            }}
          >
            {filteredIcons.map((iconName, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                  gap: "0.5rem",
                  border: "1px solid var(--ifm-color-emphasis-300)",
                  borderRadius: "var(--ifm-pagination-nav-border-radius)",
                  flexGrow: "1",
                }}
              >
                <Icon name={iconName} color="semantic.on-surface" />
                <div style={{ color: "var(--ifm-color-content-secondary)" }}>
                  {iconName}
                </div>
              </div>
            ))}
          </div>
        </ThemeWrapper>
      </div>
    </>
  );
};

export default FunctionalIconDisplay;
