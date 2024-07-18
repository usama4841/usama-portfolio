import { Box } from "@mui/material";
import React from "react";
import ContactForm from "../components/ContactUsForm";
import ContactDetails from "../components/ContactDetails";
import "@/app/CSS/contactus.css";

export default function ContactUsPage() {
  return (
    <Box className="ContactBoxWrapper">
      <Box className="ContactDetailsSide">
        <ContactDetails />
      </Box>
      <Box className="ContactFormSide">
        <ContactForm />
      </Box>
    </Box>
  );
}
