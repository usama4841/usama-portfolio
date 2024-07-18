import { Box, Chip, Divider, Typography } from "@mui/material";
import React from "react";
import "@/app/CSS/Aboutus.css";
import OfficeBuilding from "../../../public/OfficeBuilding.svg";
import Location from "../../../public/Location.svg";
import Calendar from "../../../public/Calendar.svg";
import Percentage from "../../../public/Percentage.svg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Box className="AboutBoxWrapper">
      <Box className="AboutInnerBoxWrapper">
        <Typography className="AboutMeHeader">About Me</Typography>
        <Typography className="AboutMeText">
          Hello! I'm a web developer passionate about creating efficient,
          user-friendly and visually appealing web applications.
          <br />
          <br /> I believe in the power of programming to change the world and
          that's why I enjoy every step of the development process. I'm excited
          to collaborate with you and bring your ideas to life.
        </Typography>
      </Box>
      <Box className="AboutInnerBoxWrapperSecond">
        <Typography className="AboutMeHeader">Work Experience</Typography>
        <Box className="ExperienceMainBox">
          <Box className="ExperienceMainBoxFirst">
            <Typography className="ExperienceTitle">
              Mern Stack Developer
            </Typography>
            <Box className="ContractTypeBox">
              <Chip className="ContractType" label="Full Time" />
            </Box>
          </Box>
          <Box className="ExperienceMainBoxSecond">
            <Box className="Contract">
              <Box className="ExperienceMainBoxSecondLine">
                <Box className="CompanyDetailsBox">
                  <Image
                    src={OfficeBuilding}
                    alt="OfficeBuilding"
                    height={20}
                    width={20}
                  />
                  <Typography className="CompanyName">
                    Techomax Solutions
                  </Typography>
                </Box>
                <Box className="CompanyLocationBox">
                  <Image src={Location} alt="Location" height={20} width={20} />
                  <Typography className="CompanyLocation">
                    Bharuch, Gujarat
                  </Typography>
                </Box>
              </Box>
              <Box className="ContractLength">
                <Image src={Calendar} alt="Calendar" height={20} width={20} />
                <Typography className="ContractTime">
                  Dec 2023 - Apr 2024
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider className="ExperienceBoxDivider" />
        <Box className="ExperienceMainBox">
          <Box className="ExperienceMainBoxFirst">
            <Typography className="ExperienceTitle">
              React JS Developer
            </Typography>
            <Box className="ContractTypeBox">
              <Chip className="ContractType" label="Full Time" />
            </Box>
          </Box>
          <Box className="ExperienceMainBoxSecond">
            <Box className="Contract">
              <Box className="ExperienceMainBoxSecondLine">
                <Box className="CompanyDetailsBox">
                  <Image
                    src={OfficeBuilding}
                    alt="OfficeBuilding"
                    height={20}
                    width={20}
                  />
                  <Typography className="CompanyName">
                    Codezee Solutions
                  </Typography>
                </Box>
                <Box className="CompanyLocationBox">
                  <Image src={Location} alt="Location" height={20} width={20} />
                  <Typography className="CompanyLocation">
                    Bharuch, Gujarat
                  </Typography>
                </Box>
              </Box>
              <Box className="ContractLength">
                <Image src={Calendar} alt="Calendar" height={20} width={20} />
                <Typography className="ContractTime">
                  May 2024 - Present
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider className="ExperienceBoxDivider" />
      </Box>
      <Box className="AboutInnerBoxWrapperSecond">
        <Typography className="AboutMeHeader">Education</Typography>
        <Box className="EducationMainBox">
          <Box className="ExperienceMainBoxFirst">
            <Typography className="ExperienceTitle">
              Bachelor Of Computer Applications (BCA)
            </Typography>
            <Box className="ContractTypeBox">
              <Chip className="ContractType" label="Full Time" />
            </Box>
          </Box>
          <Box className="ExperienceMainBoxSecond">
            <Box className="Contract">
              <Box className="ExperienceMainBoxSecondLine">
                <Box className="CompanyDetailsBox">
                  <Image
                    src={OfficeBuilding}
                    alt="OfficeBuilding"
                    height={20}
                    width={20}
                  />
                  <Typography className="CompanyName">MKICS</Typography>
                </Box>
                <Box className="CompanyLocationBox">
                  <Image
                    src={Percentage}
                    alt="Location"
                    height={20}
                    width={20}
                  />
                  <Typography className="CompanyLocation">7.2 %</Typography>
                </Box>
              </Box>
              <Box className="ContractLength">
                <Image src={Calendar} alt="Calendar" height={20} width={20} />
                <Typography className="ContractTime">
                  May 2019 - March 2022
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider className="ExperienceBoxDivider" />
        <Box className="EducationMainBox">
          <Box className="ExperienceMainBoxFirst">
            <Typography className="ExperienceTitle">
              Master Of Science In Computer Applications (MSc.CA)
            </Typography>
            <Box className="ContractTypeBox">
              <Chip className="ContractType" label="Full Time" />
            </Box>
          </Box>
          <Box className="ExperienceMainBoxSecond">
            <Box className="Contract">
              <Box className="ExperienceMainBoxSecondLine">
                <Box className="CompanyDetailsBox">
                  <Image
                    src={OfficeBuilding}
                    alt="OfficeBuilding"
                    height={20}
                    width={20}
                  />
                  <Typography className="CompanyName">MKICS</Typography>
                </Box>
                <Box className="CompanyLocationBox">
                  <Image
                    src={Percentage}
                    alt="Location"
                    height={20}
                    width={20}
                  />
                  <Typography className="CompanyLocation">7.9 %</Typography>
                </Box>
              </Box>
              <Box className="ContractLength">
                <Image src={Calendar} alt="Calendar" height={20} width={20} />
                <Typography className="ContractTime">
                  Aug 2022 - Apr 2024
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider className="ExperienceBoxDivider" />
      </Box>
    </Box>
  );
}
