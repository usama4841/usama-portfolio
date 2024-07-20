"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import "@/app/CSS/HomePage.css";
import PersonImage from "../../../public/Person.svg";
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
          mode === "light" ? "MainBoxWrapperSecond" : "DarkMainBoxWrapperSecond"
        }
      >
        <Box
          className={
            mode === "light"
              ? "MainInnerBoxWrapperSecond"
              : "DarkMainInnerBoxWrapperSecond"
          }
        >
          <Typography
            className={
              mode === "light"
                ? "MainInnerBoxWrapperSecondText"
                : "DarkMainInnerBoxWrapperSecondText"
            }
          >
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
