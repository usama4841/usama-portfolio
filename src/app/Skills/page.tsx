"use client";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import "@/app/CSS/skills.css";
import Image from "next/image";
import NextJsSkill from "../../../public/NextJsSkill.svg";
import HTMLSkill from "../../../public/HTMLSkill.svg";
import CSSSkill from "../../../public/CSSSkill.svg";
import BootstrapSkill from "../../../public/BootstrapSkill.svg";
import TypeScriptSkill from "../../../public/TypeScriptSkill.svg";
import ReactJsSkill from "../../../public/ReactJsSkill.svg";
import JavaScriptSkill from "../../../public/JavaScriptSkill.svg";
import NodeJsSkill from "../../../public/NodeJsSkill.svg";
import MongoDBSkill from "../../../public/MongoDBSkill.svg";
import ReduxSkill from "../../../public/ReduxSkill.svg";
import DarkNextJsSkill from "../../../public/DarkNextJsSkill.svg";
import DarkHTMLSkill from "../../../public/DarkHTMLSkill.svg";
import DarkCSSSkill from "../../../public/DarkCSSSkill.svg";
import DarkBootstrapSkill from "../../../public/DarkBootstrapSkill.svg";
import DarkTypeScriptSkill from "../../../public/DarkTypeScriptSkill.svg";
import DarkReactJsSkill from "../../../public/DarkReactJsSkill.svg";
import DarkJavaScriptSkill from "../../../public/DarkJavaScriptSkill.svg";
import DarkMongoDBSkill from "../../../public/DarkMongoDBSkill.svg";
import DarkNodeJsSkill from "../../../public/DarkNodeJsSkill.svg";
import DarkReduxSkill from "../../../public/DarkReduxSkill.svg";
import { useTheme } from "@/app/context/themeContext";

export default function SkillsComponent() {
  const { mode } = useTheme();
  const skills = [
    { src: NextJsSkill, alt: "NextJsSkill", Height: 110, width: 80 },
    { src: HTMLSkill, alt: "HTMLSkill", Height: 110, width: 80 },
    { src: CSSSkill, alt: "CSSSkill", Height: 110, width: 80 },
    { src: BootstrapSkill, alt: "BootstrapSkill", Height: 110, width: 80 },
    { src: TypeScriptSkill, alt: "TypeScriptSkill", Height: 110, width: 80 },
    { src: ReactJsSkill, alt: "ReactJsSkill", Height: 110, width: 80 },
    { src: JavaScriptSkill, alt: "JavaScriptSkill", Height: 110, width: 80 },
    { src: NodeJsSkill, alt: "NodeJsSkill", Height: 110, width: 80 },
    { src: MongoDBSkill, alt: "MongoDBSkill", Height: 110, width: 80 },
    { src: ReduxSkill, alt: "ReduxSkill", Height: 110, width: 80 },
  ];

  const Darkskills = [
    { src: DarkNextJsSkill, alt: "DarkNextJsSkill", Height: 110, width: 80 },
    { src: DarkHTMLSkill, alt: "DarkHTMLSkill", Height: 110, width: 80 },
    { src: DarkCSSSkill, alt: "DarkCSSSkill", Height: 110, width: 80 },
    {
      src: DarkBootstrapSkill,
      alt: "DarkBootstrapSkill",
      Height: 110,
      width: 80,
    },
    {
      src: DarkTypeScriptSkill,
      alt: "DarkTypeScriptSkill",
      Height: 110,
      width: 80,
    },
    { src: DarkReactJsSkill, alt: "DarkReactJsSkill", Height: 110, width: 80 },
    {
      src: DarkJavaScriptSkill,
      alt: "DarkJavaScriptSkill",
      Height: 110,
      width: 80,
    },
    { src: DarkNodeJsSkill, alt: "DarkNodeJsSkill", Height: 110, width: 80 },
    { src: DarkMongoDBSkill, alt: "DarkMongoDBSkill", Height: 110, width: 80 },
    { src: DarkReduxSkill, alt: "DarkReduxSkill", Height: 110, width: 80 },
  ];

  const selectedSkills = mode === "light" ? skills : Darkskills;
  return (
    <Box
      className={mode === "light" ? "SkillsBoxWrapper" : "DarkSkillsBoxWrapper"}
    >
      <Box
        className={
          mode === "light"
            ? "SkillsInnerBoxWrapperSecond"
            : "DarkSkillsInnerBoxWrapperSecond"
        }
      >
        <Typography
          className={mode === "light" ? "SkillsHeader" : "DarkSkillsHeader"}
        >
          Skills
        </Typography>
        <Grid
          container
          spacing={2}
          className={mode === "light" ? "SkillsMainBox" : "DarkSkillsMainBox"}
        >
          {selectedSkills.map((skill, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={index} className="pb-3">
              <div
                className={
                  mode === "light"
                    ? "SkillImageWrapper pb-1"
                    : "DarkSkillImageWrapper pb-1"
                }
              >
                <Image
                  className={mode === "light" ? "SkillImage" : "DarkSkillImage"}
                  src={skill.src}
                  alt={skill.alt}
                  height={skill.Height}
                  width={skill.width}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
