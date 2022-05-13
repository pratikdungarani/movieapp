import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import CustomTextField from "common/FormControls/Input/Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomSelect from "common/FormControls/Select/Select";
import Textarea from "common/FormControls/Textarea/Textarea";
import CustomCheckbox from "common/FormControls/Checkbox/CustomCheckbox";
import CustomRadio from "common/FormControls/Radio/Radio";
import CustomDatePicker from "common/FormControls/DatePicker/DatePicker";
import * as Yup from "yup";
import { parse, isDate } from "date-fns";

import useStyles from "./style";
function Personalinfo() {
  const classes = useStyles();
  const [hobbieArray, sethobbieArray] = useState([
    {
      label: "Cricket",
      name: "cricket",
      value: "cricket",
    },
    {
      label: "Vollyball",
      name: "vollyball",
      value: "vollyball",
    },
    {
      label: "Badmintan",
      name: "badmintan",
      value: "badmintan",
    },
  ]);
  const [materialArray, setmaterialArray] = useState([
    {
      label: "Single",
      name: "single",
      value: "single",
    },
    {
      label: "Marride",
      name: "marride",
      value: "marride",
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
  });
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  const getHobbiesList = () => {
    return hobbieArray.map((hob) => hob.value);
  };

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
          hobbies: Yup.array().required("Hobby is Required"),
          dateOfBirth: Yup.date()
            .nullable()
            .max(new Date(), `You Can not add Future Date is Your Birth Day`)
            .required("Date Of Birth field required"),
          gender: Yup.string().required(),
        })}
        onSubmit={(values, formikHelpers) => {
          console.log("values", values);
          formikHelpers.resetForm();
        }}
      >
        {({ errors, touched, values }) => (
          <Box>
            {console.log(
              "Formik Formik",
              errors,
              "touched",
              touched,
              "values",
              values
            )}
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box>
                    <CustomTextField
                      label="First Name"
                      name="firstName"
                      type="text"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <CustomTextField label="Last Name" name="lastName" />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <CustomTextField label="Email" name="email" />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <CustomTextField label="Mobile No" name="mobile" />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <CustomSelect
                      label="Blood Group"
                      name="bloodGroup"
                      selectArray={blood}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <Textarea label="Current Address" name="currentAddress" />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <Textarea
                      label="Permanent Address"
                      name="permanentAddress"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    {hobbieArray?.map((hobby, i) => {
                      return (
                        <label key={i}>
                          <Field
                            type="checkbox"
                            name="hobbies"
                            value={hobby.value}
                          />
                          {hobby.label}
                        </label>
                      );
                    })}{" "}
                    */}
                    {/* <ErrorMessage
                      component="div"
                      name="hobbies"
                      className="error"
                      style={{ color: "#ff0000" }}
                    />
                    {/* <CustomCheckbox title="Hobby" checkArr={hobbieArray} /> */}
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <CustomDatePicker
                      label="Date of Birth"
                      name="dateOfBirth"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    {genderArray.map((gen, i) => {
                      return (
                        <label key={i}>
                          <Field type="radio" name="gender" value={gen.value} />
                          {gen.label}
                        </label>
                      );
                    })}
                    <ErrorMessage
                      component="div"
                      name="gender"
                      className="error"
                      style={{ color: "#ff0000" }}
                    />
                    {/* <CustomRadio
                      title="Gender"
                      radioArr={genderArray}
                      name="gender"
                    /> */}
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <CustomRadio
                      title="Material Status"
                      radioArr={materialArray}
                      name="materialstatus"
                    />
                  </Box>
                </Grid>
              </Grid>
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
