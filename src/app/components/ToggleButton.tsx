"use client";
import React from "react";
import { IconButton, styled, Tooltip } from "@mui/material";
import SunIcon from "@mui/icons-material/WbSunny";
import MoonIcon from "@mui/icons-material/NightsStay";
import { useTheme } from "../context/themeContext";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#ffb300" : "#f0f0f0",
  backgroundColor: `${theme.palette.mode === "dark" ? "#f0f0f0" : "#666666"}`,
  borderRadius: "50%",
  padding: "1px",
  transition: "background-color 0.5s ease",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#333232" : "#474747",
  },
}));

const ToggleButton: React.FC = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Tooltip
      title={mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
    >
      <StyledIconButton onClick={toggleTheme} color="inherit">
        {mode === "dark" ? (
          <SunIcon style={{ color: "#ffb300" }} />
        ) : (
          <MoonIcon />
        )}
      </StyledIconButton>
    </Tooltip>
  );
};

export default ToggleButton;
