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
import { Height } from "@mui/icons-material";

export default function SkillsComponent() {
  const skills = [
    { src: NextJsSkill, alt: "NextJsSkill", Height: 100, width: 70 },
    { src: HTMLSkill, alt: "HTMLSkill", Height: 100, width: 70 },
    { src: CSSSkill, alt: "CSSSkill", Height: 100, width: 70 },
    { src: BootstrapSkill, alt: "BootstrapSkill", Height: 100, width: 70 },
    { src: TypeScriptSkill, alt: "TypeScriptSkill", Height: 100, width: 70 },
    { src: ReactJsSkill, alt: "ReactJsSkill", Height: 100, width: 70 },
    { src: JavaScriptSkill, alt: "JavaScriptSkill", Height: 100, width: 70 },
    { src: NodeJsSkill, alt: "NodeJsSkill", Height: 100, width: 70 },
    { src: MongoDBSkill, alt: "MongoDBSkill", Height: 100, width: 70 },
    { src: ReduxSkill, alt: "ReduxSkill", Height: 100, width: 70 },
  ];

  return (
    <Box className="SkillsBoxWrapper">
      <Box className="SkillsInnerBoxWrapperSecond">
        <Typography className="SkillsHeader">Skills</Typography>
        <Grid container spacing={2} className="SkillsMainBox">
          {skills.map((skill, index) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3} 
              lg={2.4} 
              key={index}
              className="pb-3"
            >
              <Image src={skill.src} alt={skill.alt} height={skill.Height} width={skill.width}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
