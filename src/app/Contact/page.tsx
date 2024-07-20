"use client";
import { Box } from "@mui/material";
import React from "react";
import ContactForm from "../components/ContactUsForm";
import ContactDetails from "../components/ContactDetails";
import "@/app/CSS/contactus.css";
import { useTheme } from "@/app/context/themeContext";

export default function ContactUsPage() {
  const { mode } = useTheme();
  return (
    <Box
      className={
        mode === "light" ? "ContactBoxWrapper" : "DarkContactBoxWrapper"
      }
    >
      <Box
        className={
          mode === "light" ? "ContactDetailsSide" : "DarkContactDetailsSide"
        }
      >
        <ContactDetails />
      </Box>
      <Box
        className={mode === "light" ? "ContactFormSide" : "DarkContactFormSide"}
      >
        <ContactForm />
      </Box>
    </Box>
  );
}
