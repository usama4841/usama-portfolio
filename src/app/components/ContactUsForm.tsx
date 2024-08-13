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
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "@/app/CSS/contactus.css";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@/app/context/themeContext";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  phone: yup
    .number()
    .typeError("Phone number must be in numeric value")
    .required("Phone number is required")
    .test("len", "Max 10 numbers", (val) => val.toString().length <= 10),
  message: yup
    .string()
    .required("Message is required")
    .min(
      50,
      "please provide detailed description of more than 50 characters"
    ),
});

interface ContactTypes {
  name: string;
  email: string;
  phone: number;
  message: string;
}

const contactUsFields: Array<{
  name: keyof ContactTypes;
  type: string;
  label: string;
  className: string;
  multiline?: boolean;
  rows?: number;
}> = [
  {
    name: "name",
    type: "text",
    label: "Name",
    className: "NameTextField",
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    className: "EmailTextField",
  },
  {
    name: "phone",
    type: "number",
    label: "Contact No",
    className: "EmailTextField",
  },
  {
    name: "message",
    type: "text",
    label: "Message",
    className: "MessageTextField",
    multiline: true,
    rows: 4,
  },
];

const Service_Id = process.env.NEXT_PUBLIC_SERVICE_KEY as string;
const Template_Id = process.env.NEXT_PUBLIC_TEMPLATE_KEY as string;
const Public_Key = process.env.NEXT_PUBLIC_KEY as string;

const ContactForm = () => {
  const { mode } = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactTypes>({
    resolver: yupResolver(schema),
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [isSnackbarSuccess, setIsSnackbarSuccess] = useState(true);

  const onSubmit = async (data: any) => {
    try {
      const templateParams = {
        ...data,
        from: data.email,
        reply_to: data.email,
        date: new Date(),
      };
      console.log("data", data);
      await emailjs.send(Service_Id, Template_Id, templateParams, Public_Key);

      setSnackBarMessage("Thank you, we'll contact you soon.");
      setIsSnackbarSuccess(true);
      setOpenSnackbar(true);
      reset();
    } catch (error) {
      setIsSnackbarSuccess(false);
      setSnackBarMessage("Something went wrong. Please try again later.");
      setOpenSnackbar(true);
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
    <Box
      sx={{
        maxWidth: 520,
        margin: "auto",
        padding: "20px",
        boxShadow: 10,
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <Typography
        variant="h5"
        className={
          mode === "light" ? "ContactFormHeader" : "DarkContactFormHeader"
        }
        gutterBottom
      >
        GET IN TOUCH
      </Typography>
      <form
        className={mode === "light" ? "ContactForm" : "DarkContactForm"}
        onSubmit={handleSubmit(onSubmit)}
      >
        {contactUsFields.map((field, index) => (
          <Controller
            key={index}
            name={field.name}
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <TextField
                className={mode === "light" ? "TextField" : "DarkTextField"}
                fullWidth
                type={field.type}
                name={field.name}
                value={value}
                onChange={onChange}
                label={field.label}
                variant="outlined"
                margin="normal"
                multiline={field.multiline || false}
                rows={field.rows || 1}
                error={!!errors[field.name as keyof ContactTypes]}
                helperText={errors[field.name as keyof ContactTypes]?.message}
              />
            )}
          />
        ))}
        <Button
          className={
            mode === "light"
              ? "SubmitButton py-2 mt-3"
              : "DarkSubmitButton py-2 mt-3"
          }
          type="submit"
          variant="outlined"
          color="inherit"
          fullWidth
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
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        action={action}
      />
    </Box>
  );
};

export default ContactForm;
