"use client";
import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";
import "@/app/CSS/Aboutus.css";
import OfficeBuilding from "../../../public/OfficeBuilding.svg";
import DarkOfficeBuilding from "../../../public/DarkOfficeBuilding.svg";
import Location from "../../../public/Location.svg";
import DarkLocation from "../../../public/DarkLocation.svg";
import Calendar from "../../../public/Calendar.svg";
import DarkCalendar from "../../../public/DarkCalendar.svg";
import Percentage from "../../../public/Percentage.svg";
import DarkPercentage from "../../../public/DarkPercentage.svg";
import Image from "next/image";
import { useTheme } from "@/app/context/themeContext";

const WorkExperiences = [
  {
    role: "Mern Stack Developer",
    CompanyName: "Techomax Solutions",
    Location: "Bharuch, Gujarat",
    Length: "Dec 2023 - Apr 2024",
    Contract: "Full Time",
  },
  {
    role: "React JS Developer",
    CompanyName: "Codezee Solutions",
    Location: "Surat, Gujarat",
    Length: "May 2024 - present",
    Contract: "Full Time",
  },
];

const EducationDetails = [
  {
    degree: "Bachelor Of Computer Applications (BCA)",
    collegeName: "MKICS",
    CGPA: "7.2 %",
    Length: "May 2019 - March 2022",
    Contract: "Full Time",
  },
  {
    degree: "Master Of Science In Computer Applications (MSc.CA)",
    collegeName: "MKICS",
    CGPA: "7.9 %",
    Length: "Aug 2022 - Apr 2024",
    Contract: "Full Time",
  },
];

export default function AboutPage() {
  const { mode } = useTheme();
  return (
    <Box
      className={mode === "light" ? "AboutBoxWrapper" : "DarkAboutBoxWrapper"}
    >
      <Box
        className={
          mode === "light" ? "AboutInnerBoxWrapper" : "DarkAboutInnerBoxWrapper"
        }
      >
        <Typography
          className={mode === "light" ? "AboutMeHeader" : "DarkAboutMeHeader"}
        >
          About Me
        </Typography>
        <Typography
          className={mode === "light" ? "AboutMeText" : "DarkAboutMeText"}
        >
          Hello! I'm a web developer passionate about creating efficient,
          user-friendly and visually appealing web applications.
          <br />
          <br /> I believe in the power of programming to change the world and
          that's why I enjoy every step of the development process. I'm excited
          to collaborate with you and bring your ideas to life.
        </Typography>
      </Box>
      <Box
        className={
          mode === "light"
            ? "AboutInnerBoxWrapperSecond"
            : "DarkAboutInnerBoxWrapperSecond"
        }
      >
        <Typography
          className={mode === "light" ? "AboutMeHeader" : "DarkAboutMeHeader"}
        >
          Work Experience
        </Typography>
        {WorkExperiences.map((experience, index) => (
          <Box key={index}>
            <Box
              className={
                mode === "light" ? "ExperienceMainBox" : "DarkExperienceMainBox"
              }
            >
              <Box
                className={
                  mode === "light"
                    ? "ExperienceMainBoxFirst"
                    : "DarkExperienceMainBoxFirst"
                }
              >
                <Typography
                  className={
                    mode === "light" ? "ExperienceTitle" : "DarkExperienceTitle"
                  }
                >
                  {experience.role}
                </Typography>
                <Box
                  className={
                    mode === "light" ? "ContractTypeBox" : "DarkContractTypeBox"
                  }
                >
                  <Chip
                    className={
                      mode === "light" ? "ContractType" : "DarkContractType"
                    }
                    label={experience.Contract}
                  />
                </Box>
              </Box>
              <Box
                className={
                  mode === "light"
                    ? "ExperienceMainBoxSecond"
                    : "DarkExperienceMainBoxSecond"
                }
              >
                <Box className={mode === "light" ? "Contract" : "DarkContract"}>
                  <Box
                    className={
                      mode === "light"
                        ? "ExperienceMainBoxSecondLine"
                        : "DarkExperienceMainBoxSecondLine"
                    }
                  >
                    <Box
                      className={
                        mode === "light"
                          ? "CompanyDetailsBox"
                          : "DarkCompanyDetailsBox"
                      }
                    >
                      <Image
                        src={
                          mode === "light" ? DarkOfficeBuilding : OfficeBuilding
                        }
                        alt="OfficeBuilding"
                        height={20}
                        width={20}
                      />
                      <Typography
                        className={
                          mode === "light" ? "CompanyName" : "DarkCompanyName"
                        }
                      >
                        Techomax Solutions
                      </Typography>
                    </Box>
                    <Box
                      className={
                        mode === "light"
                          ? "CompanyLocationBox"
                          : "DarkCompanyLocationBox"
                      }
                    >
                      <Image
                        src={mode === "light" ? DarkLocation : Location}
                        alt="Location"
                        height={20}
                        width={20}
                      />
                      <Typography
                        className={
                          mode === "light"
                            ? "CompanyLocation"
                            : "DarkCompanyLocation"
                        }
                      >
                        {experience.Location}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className={
                      mode === "light" ? "ContractLength" : "DarkContractLength"
                    }
                  >
                    <Image
                      src={mode === "light" ? DarkCalendar : Calendar}
                      alt="Calendar"
                      height={20}
                      width={20}
                    />
                    <Typography
                      className={
                        mode === "light" ? "ContractTime" : "DarkContractTime"
                      }
                    >
                      {experience.Length}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider
              className={
                mode === "light"
                  ? "ExperienceBoxDivider"
                  : "DarkExperienceBoxDivider"
              }
            />
          </Box>
        ))}
      </Box>
      <Box
        className={
          mode === "light"
            ? "AboutInnerBoxWrapperSecond"
            : "DarkAboutInnerBoxWrapperSecond"
        }
      >
        <Typography
          className={mode === "light" ? "AboutMeHeader" : "DarkAboutMeHeader"}
        >
          Education
        </Typography>
        {EducationDetails.map((education, index) => (
          <Box key={index}>
            <Box
              className={
                mode === "light" ? "EducationMainBox" : "DarkEducationMainBox"
              }
            >
              <Box
                className={
                  mode === "light"
                    ? "ExperienceMainBoxFirst"
                    : "DarkExperienceMainBoxFirst"
                }
              >
                <Typography
                  className={
                    mode === "light" ? "ExperienceTitle" : "DarkExperienceTitle"
                  }
                >
                  {education.degree}
                </Typography>
                <Box
                  className={
                    mode === "light" ? "ContractTypeBox" : "DarkContractTypeBox"
                  }
                >
                  <Chip
                    className={
                      mode === "light" ? "ContractType" : "DarkContractType"
                    }
                    label={education.Contract}
                  />
                </Box>
              </Box>
              <Box
                className={
                  mode === "light"
                    ? "ExperienceMainBoxSecond"
                    : "DarkExperienceMainBoxSecond"
                }
              >
                <Box className={mode === "light" ? "Contract" : "DarkContract"}>
                  <Box
                    className={
                      mode === "light"
                        ? "ExperienceMainBoxSecondLine"
                        : "DarkExperienceMainBoxSecondLine"
                    }
                  >
                    <Box
                      className={
                        mode === "light"
                          ? "CompanyDetailsBox"
                          : "DarkCompanyDetailsBox"
                      }
                    >
                      <Image
                        src={
                          mode === "light" ? DarkOfficeBuilding : OfficeBuilding
                        }
                        alt="OfficeBuilding"
                        height={20}
                        width={20}
                      />
                      <Typography
                        className={
                          mode === "light" ? "CompanyName" : "DarkCompanyName"
                        }
                      >
                        {education.collegeName}
                      </Typography>
                    </Box>
                    <Box
                      className={
                        mode === "light"
                          ? "CompanyLocationBox"
                          : "DarkCompanyLocationBox"
                      }
                    >
                      <Image
                        src={mode === "light" ? DarkPercentage : Percentage}
                        alt="Location"
                        height={20}
                        width={20}
                      />
                      <Typography
                        className={
                          mode === "light"
                            ? "CompanyLocation"
                            : "DarkCompanyLocation"
                        }
                      >
                        {education.CGPA}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className={
                      mode === "light" ? "ContractLength" : "DarkContractLength"
                    }
                  >
                    <Image
                      src={mode === "light" ? DarkCalendar : Calendar}
                      alt="Calendar"
                      height={20}
                      width={20}
                    />
                    <Typography
                      className={
                        mode === "light" ? "ContractTime" : "DarkContractTime"
                      }
                    >
                      {education.Length}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider
              className={
                mode === "light"
                  ? "ExperienceBoxDivider"
                  : "DarkExperienceBoxDivider"
              }
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
