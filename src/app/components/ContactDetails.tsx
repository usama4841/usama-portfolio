import { Box, Typography } from "@mui/material";
import React from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Link from "next/link";

export default function ContactDetails() {
  return (
    <Box>
      <Typography className="ContactDetailsMainHeading pb-2">
        DON'T BE SHY!
      </Typography>
      <Typography className="ContactDetailsText pb-5">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas, or opportunities to be part of your visions.
        Whether you have a question about my work, a proposal for a
        collaboration, or just want to share your thoughts, I'd love to hear
        from you.
      </Typography>
      <Box className="ContactDetailsEmailBox">
        <AttachEmailIcon className="EmailIcon" fontSize="large" />
        <Box>
          <Typography className="EmailHeader">MAIL ME</Typography>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=usamapatel34356@gmail.com"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Typography className="EmailMain">
              usamapatel344356@gmail.com
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box className="ContactDetailsPhoneBox">
        <LocalPhoneIcon className="PhoneIcon" />
        <Box>
          <Typography className="PhoneHeader">CALL ME</Typography>
          <Link href="tel:+919328167199" style={{ textDecoration: "none" }}>
            <Typography className="PhoneMain">+91 93281 67199</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
