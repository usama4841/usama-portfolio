import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import "@/app/CSS/projects.css";
import InoteBook from "../../../public/iNotebook.svg";
import FitHub from "../../../public/FitHub.svg";
import NewsMonkey from "../../../public/NewsMonkey.svg";
import GitHubDark from "../../../public/GitHubDark.svg";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <Box className="ProjectBoxWrapper">
      <Box className="ProjectInnerBoxWrapperSecond">
        <Typography className="ProjectHeader">Projects</Typography>
        <Typography className="ProjectText">
          Things I've Built So Far
        </Typography>
        <Grid container className="ProjectMainBox">
          {Projects.map((project, index) => (
            <Grid
              item
              xs={11}
              sm={5}
              md={5.4}
              lg={3.7}
              xl={3}
              key={index}
              className="ProjectItem mx-2 mb-4"
            >
              <Box className="ProjectImageBox">
                <Image
                  className="ProjectImage"
                  src={project.image}
                  alt="InoteBook"
                />
              </Box>
              <Box className="ProjectDescriptionMainBox px-3">
                <Box className="ProjectTitleBox">
                  <Typography className="ProjectTitle">
                    {project.title}
                  </Typography>
                </Box>
                {/* <Box className="ProjectDescriptionBox"> */}
                <Typography className="ProjectDescription pb-3">
                  {project.description.substring(0, 69) + "..."}
                </Typography>
                {/* </Box>
                <Box className="ProjectTagBox"> */}
                <Typography className="ProjectTag pb-1">
                  <span className="TagHead">Tech stack: </span> {project.tags}
                </Typography>
                {/* {/* </Box> */}
                <Box className="ProjectLinkBox">
                  <Box className="GitHubImageBox">
                    <Image
                      src={GitHubDark}
                      alt="GitHub"
                      height={20}
                      width={20}
                    />
                  </Box>
                  <Box className="GitHubLinkBox">
                    <Typography className="ProjectLinkText">
                      <Link
                        className="ProjectLink"
                        href={project.link}
                        target="_blank"
                      >
                        View Code
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
