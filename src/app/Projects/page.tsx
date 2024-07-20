"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "@/app/CSS/projects.css";
import InoteBook from "../../../public/iNotebook.svg";
import FitHub from "../../../public/FitHub.svg";
import NewsMonkey from "../../../public/NewsMonkey.svg";
import GitHubDark from "../../../public/GitHubDark.svg";
import GitHubLogo from "../../../public/GitHub.svg";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/context/themeContext";

const Projects = [
  {
    title: "iNotebook",
    description:
      "Full-stack application using MongoDB, Express, React, and Node.js to allow users to create, store, and manage their notes securely on the cloud. The app should include features such as user authentication and responsive design. Additionally, implement secure storage practices and consider scalability for handling a large number of users. This is a sample description to demonstrate truncation functionality in a React component using JavaScript.",
    tags: "React, Node, MongoDB",
    image: InoteBook,
    link: "https://github.com/usama4841/inotebook/",
  },
  {
    title: "FitHub",
    description:
      "Introducing FitHub, a comprehensive platform revolutionizing gym management and e-commerce. FitHub empowers gym owners to effortlessly promote offers to local users while providing robust management tools for members, trainers, and packages. Users benefit from seamless access to local gym memberships, free workouts, personalized diet plans, and BMI tracking. Experience the future of fitness management and access with FitHub!",
    tags: "React, Node, MongoDB",
    image: FitHub,
    link: "https://github.com/usama4841/FitHub",
  },
  {
    title: "NewsMonkey",
    description:
      "this is a basic reactjs project which is mainly used to fetch news according to different categories from the API. this is a practice project.",
    tags: "React, Redux, Rest API",
    image: NewsMonkey,
    link: "https://github.com/usama4841/NewsMonkey/",
  },
];

export default function Page() {
  const { mode } = useTheme();
  console.log("Project Theme mode:", mode);
  return (
    <Box
      className={
        mode === "light" ? "ProjectBoxWrapper" : "DarkProjectBoxWrapper"
      }
    >
      <Box
        className={
          mode === "light"
            ? "ProjectInnerBoxWrapperSecond"
            : "DarkProjectInnerBoxWrapperSecond"
        }
      >
        <Typography
          className={mode === "light" ? "ProjectHeader" : "DarkProjectHeader"}
        >
          Projects
        </Typography>
        <Typography
          className={mode === "light" ? "ProjectText" : "DarkProjectText"}
        >
          Things I've Built So Far
        </Typography>
        <Grid
          container
          className={mode === "light" ? "ProjectMainBox" : "DarkProjectMainBox"}
        >
          {Projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "100%",
                  sm: "48%",
                  md: "30%",
                  lg: "30%",
                },
                margin: {
                  xs: "10px 0",
                  sm: "10px 1%",
                  md: "10px 1.5%",
                  lg: "10px 1%",
                },
                // padding: "15px",
                backgroundColor: mode === "light" ? "#ffffff" : "#363636",
                boxShadow: "2px 5px 8px rgba(0, 0, 0, 0.4)",
                borderRadius: "10px",
              }}
              className={mode === "light" ? "ProjectItem" : "DarkProjectItem"}
            >
              <Box
                className={
                  mode === "light" ? "ProjectImageBox" : "DarkProjectImageBox"
                }
              >
                <Image
                  className={
                    mode === "light" ? "ProjectImage" : "DarkProjectImage"
                  }
                  src={project.image}
                  alt={project.title}
                />
              </Box>
              <Box
                className={
                  mode === "light"
                    ? "ProjectDescriptionMainBox px-3"
                    : "DarkProjectDescriptionMainBox px-3"
                }
              >
                <Box
                  className={
                    mode === "light" ? "ProjectTitleBox" : "DarkProjectTitleBox"
                  }
                >
                  <Typography
                    className={
                      mode === "light" ? "ProjectTitle" : "DarkProjectTitle"
                    }
                  >
                    {project.title}
                  </Typography>
                </Box>
                <Typography
                  className={
                    mode === "light"
                      ? "ProjectDescription pb-3"
                      : "DarkProjectDescription pb-3"
                  }
                >
                  {project.description.substring(0, 69) + "..."}
                </Typography>
                <Typography
                  className={
                    mode === "light" ? "ProjectTag pb-1" : "DarkProjectTag pb-1"
                  }
                >
                  <span
                    className={mode === "light" ? "TagHead" : "DarkTagHead"}
                  >
                    Tech stack:{" "}
                  </span>{" "}
                  {project.tags}
                </Typography>
                <Box
                  className={
                    mode === "light" ? "ProjectLinkBox" : "DarkProjectLinkBox"
                  }
                >
                  <Box
                    className={
                      mode === "light" ? "GitHubImageBox" : "DarkGitHubImageBox"
                    }
                  >
                    <Image
                      src={mode === "light" ? GitHubDark : GitHubLogo}
                      alt="GitHub"
                      height={20}
                      width={20}
                    />
                  </Box>
                  <Box
                    className={
                      mode === "light" ? "GitHubLinkBox" : "DarkGitHubLinkBox"
                    }
                  >
                    <Typography
                      className={
                        mode === "light"
                          ? "ProjectLinkText"
                          : "DarkProjectLinkText"
                      }
                    >
                      <Link
                        className={
                          mode === "light" ? "ProjectLink" : "DarkProjectLink"
                        }
                        href={project.link}
                        target="_blank"
                      >
                        View Code
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
