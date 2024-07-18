import { Box, Typography } from "@mui/material";
import React from "react";
import "@/app/CSS/HomePage.css";
import PersonImage from "../../../public/Person.svg";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Box className="MainBoxWrapper">
        <Box className="MainInnerBoxWrapper">
          <Box className="MainInnerBoxPartOne">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography className="MainInnerBoxText">Hi</Typography>
              <Typography className="MainInnerBoxHand">👋</Typography>
              <Typography className="MainInnerBoxText">,</Typography>
            </Box>
            <Typography className="MainInnerBoxText">My name is</Typography>
            <Typography className="MainInnerBoxName">Usama Patel,</Typography>
            <Typography className="MainInnerBoxText">
              I build websites.
            </Typography>
          </Box>
          <Box className="MainInnerBoxPartTwo">
            <Box className="MainInnerBoxImageOuter">
              <Box className="MainInnerBoxImageInner">
                <Image
                  className="PersonImage"
                  src={PersonImage}
                  alt="PersonName"
                  height={280}
                  width={280}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="MainBoxWrapperSecond">
        <Box className="MainInnerBoxWrapperSecond">
          <Typography className="MainInnerBoxWrapperSecondText">
            Hello! I'm a web developer passionate about creating efficient,
            user-friendly and visually appealing web applications.
            <br />
            <br /> I believe in the power of programming to change the world and
            that's why I enjoy every step of the development process. I'm
            excited to collaborate with you and bring your ideas to life.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
