"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import PortfolioLogo from "../../../public/PortFolio-Logo.svg";
import GitHubLogo from "../../../public/GitHub.svg";
import TwitterLogo from "../../../public/Twitter.svg";
import LinkedinLogo from "../../../public/Linkedin.svg";
import MenuGitHub from "../../../public/MenuGitHub.svg";
import MenuTwitter from "../../../public/MenuTwitter.svg";
import MenuLinkedin from "../../../public/MenuLinkedin.svg";
import MenuClose from "../../../public/MenuClose.svg";
import NavButton from "../../../public/NavButton.svg";
import "@/app/CSS/Navbar-CSS.css";

export default function NavbarComponent() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar id="Navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Image
                src={PortfolioLogo}
                alt="Portfolio"
                // height="80"
                // width="80"
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <Link className="NavLink px-4" href="/" passHref>
              Home
            </Link>
            <Link className="NavLink px-4" href="/Projects" passHref>
              Projects
            </Link>
            <Link className="NavLink px-4" href="/Skills" passHref>
              Skills
            </Link>
            <Link className="NavLink px-4" href="/About" passHref>
              About
            </Link>
            <Link className="NavLink px-4" href="/Contact" passHref>
              Contact
            </Link>
            <Link
              className="NavLink px-1"
              href="https://github.com/usama4841"
              target="_blank"
              passHref
            >
              <Image src={GitHubLogo} alt="Github" height="25" width="25" />
            </Link>
            <Link
              className="NavLink px-1"
              href="https://x.com/Usama_p07?s=09"
              target="_blank"
              passHref
            >
              <Image src={TwitterLogo} alt="Twitter" height="25" width="25" />
            </Link>
            <Link
              className="NavLink px-1"
              href="https://www.linkedin.com/in/usama-patel-173a11220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              passHref
            >
              <Image src={LinkedinLogo} alt="Linkedin" height="25" width="25" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <Image src={NavButton} alt="Navbar" height={25} width={25} />
            </IconButton>
            <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
              <Box
                sx={{ paddingX: "50px" }}
                role="presentation"
                onClick={handleDrawerToggle}
                onKeyDown={handleDrawerToggle}
              >
                <List className="DrawerList">
                  <ListItem
                    className="py-4"
                    sx={{ display: "flex", justifyContent: "end" }}
                  >
                    <Image
                      src={MenuClose}
                      alt="Navbar"
                      height={25}
                      width={25}
                      onClick={handleDrawerToggle}
                      style={{ cursor: "pointer" }}
                    />
                  </ListItem>
                  <Divider sx={{ backgroundColor: "white" }} />
                  <ListItem>
                    <ListItemText>
                      <Link className="MenuNavLink" href="/" passHref>
                        Home
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <Divider sx={{ backgroundColor: "white", marginX: "20px" }} />
                  <ListItem>
                    <ListItemText>
                      <Link className="MenuNavLink" href="/Projects" passHref>
                        Projects
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <Divider sx={{ backgroundColor: "white", marginX: "20px" }} />
                  <ListItem>
                    <ListItemText>
                      <Link className="MenuNavLink" href="/Skills" passHref>
                        Skills
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <Divider sx={{ backgroundColor: "white", marginX: "20px" }} />
                  <ListItem>
                    <ListItemText>
                      <Link className="MenuNavLink" href="/About" passHref>
                        About
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <Divider sx={{ backgroundColor: "white", marginX: "20px" }} />
                  <ListItem>
                    <ListItemText>
                      <Link className="MenuNavLink" href="/Contact" passHref>
                        Contact
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <Divider sx={{ backgroundColor: "white", marginX: "20px" }} />
                  <ListItem
                    className="py-4"
                    sx={{ dispay: "flex", justifyContent: "center" }}
                  >
                    <Link
                      className="MenuNavLink px-3"
                      href="https://github.com/usama4841"
                      target="_blank"
                      passHref
                    >
                      <Image
                        src={MenuGitHub}
                        alt="Github"
                        height="25"
                        width="25"
                      />
                    </Link>
                    <Link
                      className="MenuNavLink px-3"
                      href="https://x.com/Usama_p07?s=09"
                      target="_blank"
                      passHref
                    >
                      <Image
                        src={MenuTwitter}
                        alt="Twitter"
                        height="25"
                        width="25"
                      />
                    </Link>
                    <Link
                      className="MenuNavLink px-3"
                      href="https://www.linkedin.com/in/usama-patel-173a11220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      passHref
                    >
                      <Image
                        src={MenuLinkedin}
                        alt="Linkedin"
                        height="25"
                        width="25"
                      />
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
