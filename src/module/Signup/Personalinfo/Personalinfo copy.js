import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import CustomTextField from "common/FormControls/Input/Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "common/FormControls/TextError/TextError";
import FormikController from "common/FormControls/FormikController/FormikController";

import useStyles from "./style";
function Personalinfo() {
  const classes = useStyles();
  const [hobbieArray, sethobbieArray] = useState([
    {
      name: "cricket",
      label: "Cricket",
      value: "cricket",
    },
    {
      name: "vollyball",
      label: "Vollyball",
      value: "vollyball",
    },
    {
      name: "badmintan",
      label: "Badmintan",
      value: "badmintan",
    },
  ]);

  const [blood, setBlood] = useState([
    "A+",
    "A-",
    "B-",
    "B+",
    "O+",
    "O-",
    "AB+",
    "AB-",
  ]);
  const [genderArray, setGenderArray] = useState([
    {
      id: 0,
      label: "Male",
      value: "male",
    },
    {
      id: 1,
      label: "FeMale",
      value: "female",
    },
  ]);
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    bloodGroup: "",
    currentAddress: "",
    permanentAddress: "",
    hobbies: [],
    dateOfBirth: null,
    materialstatus: "",
    gender: "",
    password: "",
    cpassword: "",
    tandc: false,
  });
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  return (
    <div>
      <Typography variant="h5" component="h5" className={classes.titleInfo}>
        Personal Info
      </Typography>
      <Formik
        initialValues={personalData}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("Please enter first name")
            .min(2, "First Name too short"),
          lastName: Yup.string()
            .required("Please enter last name")
            .min(2, "Last Name too short"),
          currentAddress: Yup.string()
            .required("Please enter Current Address")
            .min(5, "Current Address too short"),
          permanentAddress: Yup.string()
            .required("Please enter permanent Address")
            .min(5, "permanent Address too short"),
          email: Yup.string()
            .required("Please enter email")
            .email("Invalid email"),
          mobile: Yup.string()
            .matches(phoneRegex, "Invalid phone")
            .required("Phone is required"),
          bloodGroup: Yup.string()
            .oneOf(blood, "Invalid Job Type")
            .required("bloodGroup Required"),
          hobbies: Yup.array().min(1).required(),
          dateOfBirth: Yup.date()
            .nullable()
            .max(new Date(), `You Can not add Future Date is Your Birth Day`)
            .required("Date Of Birth field required"),
          gender: Yup.string().required(),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
          cpassword: Yup.string().when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Both password need to be the same"
            ),
          }),
          tandc: Yup.boolean().oneOf(
            [true],
            "You must accept the terms and conditions"
          ),
        })}
        onSubmit={(values, formikHelpers) => {
          console.log("values", values);
          formikHelpers.resetForm();
        }}
      >
        {({ errors, values }) => (
          <Box>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box>
                    <FormikController
                      control="input"
                      label="First Name"
                      name="firstName"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <FormikController
                      control="input"
                      label="Last Name"
                      name="lastName"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <FormikController
                      control="input"
                      label="Email"
                      name="email"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <FormikController
                      control="input"
                      label="Mobile No"
                      name="mobile"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <FormikController
                      control="select"
                      label="Blood Group"
                      name="bloodGroup"
                      selectArray={blood}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <FormikController
                      control="textArea"
                      label="Current Address"
                      name="currentAddress"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <FormikController
                      control="textArea"
                      label="Permanent Address"
                      name="permanentAddress"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <FormikController
                      control="checkbox"
                      label="Hobby"
                      name="hobbies"
                      options={hobbieArray}
                    />
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box>
                    <FormikController
                      control="date"
                      label="Date of Birth"
                      name="dateOfBirth"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <FormikController
                      control="radio"
                      label="Gender"
                      options={genderArray}
                      name="gender"
                    />
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box>
                    <CustomTextField
                      type="password"
                      label="Password"
                      name="password"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <CustomTextField
                      type="password"
                      label="Confirm Password"
                      name="cpassword"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box>
                <Field
                  type="checkbox"
                  name="tandc"
                  className="form-check-input"
                  id="tandc"
                />
                <label htmlFor="tandc">
                  I agree to the Terms and Conditions
                </label>
                <ErrorMessage component={TextError} name="tandc" />
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Sign up
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </div>
  );
}

export default Personalinfo;
