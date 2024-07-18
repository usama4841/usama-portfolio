import Image from "next/image";
import HomePage from "./Homepage/page";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <HomePage />
    </Box>
  );
}
