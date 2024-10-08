import React from "react";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Header from "Components/Header";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp = /^0?9\d{9}$/;

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = (data) => {
    console.log(data);
    handleClick();
    reset();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="off"
    >
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"}/>
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName
              ? "This field is required & min 3 characters"
              : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName ? "This field is required & min 3 characters" : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "Please provide a valid email address" : null
        }
        {...register("email", {
          required: true,
          pattern: regEmail,
        })}
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.contactNumber)}
        helperText={
          errors.contactNumber ? "Please provide a valid phone number" : null
        }
        {...register("contactNumber", { required: true, pattern: phoneRegExp })}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" {...register("address1")} />
      <TextField label="Address 2" variant="filled" {...register("address2")} />
      <TextField
        variant="filled"
        id="outlined-select-role"
        select
        label="Role"
        defaultValue="User"
        {...register("role", { required: true })}
        error={Boolean(errors.role)}
        helperText={errors.role ? "This field is required" : null}
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
