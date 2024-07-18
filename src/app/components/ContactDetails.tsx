import { Box, Typography } from "@mui/material";
import React from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function ContactDetails() {
  return (
    <Box>
      <Typography className="ContactDetailsMainHeading pb-2">
        DON'T BE SHY!
      </Typography>
      <Typography className="ContactDetailsText pb-5">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas, or opportunities to be part of your visions.
      </Typography>
      <Box className="ContactDetailsEmailBox">
        <AttachEmailIcon className="EmailIcon" fontSize="large" />
        <Box>
          <Typography className="EmailHeader">MAIL ME</Typography>
          <Typography className="EmailMain">usamapatel344356@gmail.com</Typography>
        </Box>
      </Box>
      <Box className="ContactDetailsPhoneBox">
        <LocalPhoneIcon className="PhoneIcon" fontSize="large" />
        <Box>
          <Typography className="PhoneHeader">CALL ME</Typography>
          <Typography className="PhoneMain">+91 93281 67199</Typography>
        </Box>
      </Box>
    </Box>
  );
}
