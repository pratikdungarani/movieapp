import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import CustomTextField from "common/FormControls/Input/Input";
import { Field, ErrorMessage } from "formik";
import TextError from "common/FormControls/TextError/TextError";
import FormikController from "common/FormControls/FormikController/FormikController";

import useStyles from "./style";
function Personalinfo() {
  const classes = useStyles();
  const [hobbieArray] = useState([
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

  const [blood] = useState(["A+", "A-", "B-", "B+", "O+", "O-", "AB+", "AB-"]);
  const [genderArray] = useState([
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

  return (
    <div>
      <Typography variant="h5" component="h5" className={classes.titleInfo}>
        Personal Info
      </Typography>

      <Box>
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
              <FormikController control="input" label="Email" name="email" />
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
          <label htmlFor="tandc">I agree to the Terms and Conditions</label>
          <ErrorMessage component={TextError} name="tandc" />
        </Box>
        {/* <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Sign up
          </Button> */}
      </Box>
    </div>
  );
}

export default Personalinfo;
