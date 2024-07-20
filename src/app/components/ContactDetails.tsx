import { Box, Typography } from "@mui/material";
import React from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";
import { useTheme } from "@/app/context/themeContext";

export default function ContactDetails() {
  const { mode } = useTheme();
  return (
    <Box>
      <Typography
        className={
          mode === "light"
            ? "ContactDetailsMainHeading pb-2"
            : "DarkContactDetailsMainHeading pb-2"
        }
      >
        DON'T BE SHY!
      </Typography>
      <Typography
        className={
          mode === "light"
            ? "ContactDetailsText pb-5"
            : "DarkContactDetailsText pb-5"
        }
      >
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas, or opportunities to be part of your visions.
        Whether you have a question about my work, a proposal for a
        collaboration, or just want to share your thoughts, I'd love to hear
        from you.
      </Typography>
      <Box
        className={
          mode === "light"
            ? "ContactDetailsEmailBox"
            : "DarkContactDetailsEmailBox"
        }
      >
        <AttachEmailIcon
          className={mode === "light" ? "EmailIcon" : "DarkEmailIcon"}
          fontSize="large"
        />
        <Box>
          <Typography
            className={mode === "light" ? "EmailHeader" : "DarkEmailHeader"}
          >
            MAIL ME
          </Typography>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=usamapatel34356@gmail.com"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Typography
              className={mode === "light" ? "EmailMain" : "DarkEmailMain"}
            >
              usamapatel344356@gmail.com
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        className={
          mode === "light"
            ? "ContactDetailsPhoneBox"
            : "DarkContactDetailsPhoneBox"
        }
      >
        <LocalPhoneIcon
          className={mode === "light" ? "PhoneIcon" : "DarkPhoneIcon"}
        />
        <Box>
          <Typography
            className={mode === "light" ? "PhoneHeader" : "DarkPhoneHeader"}
          >
            CALL ME
          </Typography>
          <Link href="tel:+919328167199" style={{ textDecoration: "none" }}>
            <Typography
              className={mode === "light" ? "PhoneMain" : "DarkPhoneMain"}
            >
              +91 93281 67199
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
