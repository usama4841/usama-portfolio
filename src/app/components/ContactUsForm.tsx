/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  IconButton,
} from "@mui/material";
import "@/app/CSS/contactus.css";
import CloseIcon from "@mui/icons-material/Close";

const contactUsFields = [
  {
    name: "name",
    type: "text",
    label: "Name",
    variant: "outlined",
    margin: "normal",
    className: "NameTextField",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    variant: "outlined",
    margin: "normal",
    className: "EmailTextField",
  },
  {
    name: "message",
    type: "text",
    label: "Message",
    variant: "outlined",
    margin: "normal",
    className: "MessageTextField",
    multiline: true,
    rows: 4,
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [isSnackbarSuccess, setIsSnackbarSuccess] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const templateParams = {
        ...formData,
        from: formData.email,
        reply_to: formData.email,
      };

      await emailjs.send(
        "service_youti7z",
        "template_b87oqki",
        templateParams,
        "EYEAalzhJHIpPPAs2"
      );

      setSnackBarMessage("Thank you, we'll contact you soon.");
      setIsSnackbarSuccess(true);
      setOpenSnackbar(true);
      // Reset form fields
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setIsSnackbarSuccess(false);
      setSnackBarMessage("Something went wrong. Please try again later.");
      setOpenSnackbar(true);
      console.error("Error sending email:", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="medium"
        aria-label="close"
        onClick={handleCloseSnackbar}
        sx={{ color: "white" }}
      >
        <CloseIcon fontSize="medium" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", padding: "20px", boxShadow: 10, borderRadius: "10px" }}>
      <Typography variant="h5" className="ContactFormHeader" gutterBottom>
        GET IN TOUCH
      </Typography>
      <form className="ContactForm" onSubmit={handleSubmit}>
        {contactUsFields.map((field, index) => (
          <TextField
            key={index}
            fullWidth
            type={field.type}
            name={field.name}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            label={field.label}
            variant={field.variant}
            margin={field.margin}
            multiline={field.multiline || false}
            rows={field.rows || 1}
            className={field.className}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#0d434f",
                },
                "&:hover fieldset": {
                  borderColor: "#0e4957",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1a4d58",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#1a4d58",
              },
              marginBottom: 1,
            }}
          />
        ))}
        <Button
          className="SubmitButton py-2 mt-3"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            backgroundColor: "#0d434f",
            "&:hover": { backgroundColor: "#03596d" },
          }}
        >
          Get In Touch
        </Button>
      </form>
      <Snackbar
        className={
          isSnackbarSuccess ? "ContactUsSnackBar" : "ContactUsSnackBarError"
        }
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackBarMessage}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        action={action}
      />
    </Box>
  );
};

export default ContactForm;
