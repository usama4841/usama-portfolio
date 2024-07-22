"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import "@/app/CSS/HomePage.css";
import PersonImage from "../../../public/Person.svg";
import ProgrammingVector from "../../../public/ProgrammingVector.svg";

import Image from "next/image";
import { useTheme } from "@/app/context/themeContext";

export default function HomePage() {
  const { mode } = useTheme();
  return (
    <>
      <Box
        className={mode === "light" ? "MainBoxWrapper" : "DarkMainBoxWrapper"}
      >
        <Box
          className={
            mode === "light" ? "MainInnerBoxWrapper" : "DarkMainInnerBoxWrapper"
          }
        >
          <Box
            className={
              mode === "light"
                ? "MainInnerBoxPartOne"
                : "DarkMainInnerBoxPartOne"
            }
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                className={
                  mode === "light" ? "MainInnerBoxText" : "DarkMainInnerBoxText"
                }
              >
                Hi
              </Typography>
              <Typography
                className={
                  mode === "light" ? "MainInnerBoxHand" : "DarkMainInnerBoxHand"
                }
              >
                👋
              </Typography>
              <Typography
                className={
                  mode === "light" ? "MainInnerBoxText" : "DarkMainInnerBoxText"
                }
              >
                ,
              </Typography>
            </Box>
            <Typography
              className={
                mode === "light" ? "MainInnerBoxText" : "DarkMainInnerBoxText"
              }
            >
              My name is
            </Typography>
            <Typography
              className={
                mode === "light" ? "MainInnerBoxName" : "DarkMainInnerBoxName"
              }
            >
              Usama Patel,
            </Typography>
            <Typography
              className={
                mode === "light" ? "MainInnerBoxText" : "DarkMainInnerBoxText"
              }
            >
              I build websites.
            </Typography>
          </Box>
          <Box
            className={
              mode === "light"
                ? "MainInnerBoxPartTwo"
                : "DarkMainInnerBoxPartTwo"
            }
          >
            <Box
              className={
                mode === "light"
                  ? "MainInnerBoxImageOuter"
                  : "DarkMainInnerBoxImageOuter"
              }
            >
              <Box
                className={
                  mode === "light"
                    ? "MainInnerBoxImageInner"
                    : "DarkMainInnerBoxImageInner"
                }
              >
                <Image
                  className={
                    mode === "light" ? "PersonImage" : "DarkPersonImage"
                  }
                  src={PersonImage}
                  alt="PersonName"
                  height={270}
                  width={270}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={
          mode === "light"
            ? "MainBoxWrapperSecond mt-4"
            : "DarkMainBoxWrapperSecond mt-4"
        }
      >
        <Box
          className={
            mode === "light"
              ? "MainInnerBoxWrapperSecond"
              : "DarkMainInnerBoxWrapperSecond"
          }
        >
          <Image
            src={ProgrammingVector}
            alt="ProgrammingVector"
            height={280}
            width={280}
          />
          <Typography
            className={
              mode === "light"
                ? "MainInnerBoxWrapperSecondText"
                : "DarkMainInnerBoxWrapperSecondText"
            }
          >
            Hello! <br />
            <br />
            I’m a dedicated web developer with a strong passion for crafting
            efficient, user-friendly, and visually stunning web applications.
            With a deep understanding of modern web technologies and design
            principles, I strive to create digital experiences that are not only
            functional but also engaging and accessible.
            <br />
            <br /> I believe in the transformative power of technology and its
            ability to make a significant impact on the world. This belief fuels
            my enthusiasm for every stage of the development process—from
            conceptualization and design to coding and deployment. I take pride
            in writing clean, maintainable code and employing best practices to
            ensure high performance and scalability.
            <br />
            <br /> Let’s make something amazing together!
          </Typography>
        </Box>
      </Box>
    </>
  );
}
