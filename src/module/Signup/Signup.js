import React, { useState } from "react";
import { Container } from "@mui/material";
import PersonalInfo from "./Personalinfo/Personalinfo";
import ProfessionalForm from "./ProfessionalForm/ProfessionalForm";

import { Box } from "@mui/material";
import MultiFormtepForm from "./MultiFormtepForm/MultiFormtepForm";
import { FormStep } from "./MultiFormtepForm/MultiFormtepForm";
import useStyles from "./style";
import * as Yup from "yup";

const Signup = () => {
  const classes = useStyles();

  const [blood] = useState(["A+", "A-", "B-", "B+", "O+", "O-", "AB+", "AB-"]);

  const [userData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    bloodGroup: "",
    currentAddress: "",
    permanentAddress: "",
    hobbies: [],
    dateOfBirth: null,
    gender: "",
    password: "",
    cpassword: "",
    tandc: false,
    companyWebite: "",
    materialstatus: "",
    skills: [],
    joinDate: null,
    endDate: null,
  });

  return (
    <Container sx={{ background: "#fff" }}>
      <Box className={classes.signupMain}>
        <MultiFormtepForm
          initialValues={userData}
          onSubmit={async (values, helpers) => {
            console.log("values", values, "helpers", helpers);
            helpers.resetForm();
          }}
        >
          <FormStep
            stepName="Personal Info"
            onSubmit={() => console.log("submit step 1")}
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
                .matches(
                  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  "Invalid phone"
                )
                .required("Phone is required"),
              bloodGroup: Yup.string()
                .oneOf(blood, "Invalid Job Type")
                .required("bloodGroup Required"),
              hobbies: Yup.array().min(1).required(),
              dateOfBirth: Yup.date()
                .nullable()
                .max(
                  new Date(),
                  `You Can not add Future Date is Your Birth Day`
                )
                .required("Date Of Birth field required"),
              gender: Yup.string().required(),
              password: Yup.string()
                .required("No password provided.")
                .min(8, "Password is too short - should be 8 chars minimum.")
                .matches(
                  /[a-zA-Z]/,
                  "Password can only contain Latin letters."
                ),
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
          >
            <PersonalInfo />
          </FormStep>
          <FormStep
            stepName="Professional Info"
            onSubmit={() => console.log("submit step 2")}
            validationSchema={Yup.object({
              companyWebite: Yup.string()
                .url()
                .required(" Website link required"),
              materialstatus: Yup.string().required("Material status Required"),
              skills: Yup.array().min(1).required(),
              joinDate: Yup.date()
                .nullable()
                .max(
                  new Date(),
                  `You Can not add Future Date is Your Birth Day`
                )
                .required("join Date field required"),
              endDate: Yup.date()
                .nullable()
                .max(
                  new Date(),
                  `You Can not add Future Date is Your Birth Day`
                )
                .required("end Date field required"),
            })}
          >
            <ProfessionalForm />
          </FormStep>
          <FormStep>
            <h3>Review</h3>
          </FormStep>
        </MultiFormtepForm>
      </Box>
    </Container>
  );
};

export default Signup;
