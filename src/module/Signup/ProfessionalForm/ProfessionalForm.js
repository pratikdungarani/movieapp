import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import CustomTextField from "common/FormControls/Input/Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomSelect from "common/FormControls/Select/Select";
import DatePicker from "common/FormControls/DatePicker/DatePicker";
import * as Yup from "yup";
import useStyles from "./style";

function ProfessionalForm() {
  const classess = useStyles();
  const [professionalData, setprofessionalData] = useState({
    companyWebite: "",
  });

  return (
    <div>
      <Typography variant="h5" component="h5" className={classess.titleInfo}>
        Professional Info
      </Typography>
      <Formik
        initialValues={professionalData}
        validationSchema={Yup.object({
          companyWebite: Yup.string().url().required(" Website link required"),
          joinDate: Yup.date()
            .nullable()
            .max(new Date(), `You Can not add Future Date is Your Birth Day`)
            .required("Date Of Birth field required"),
          endDate: Yup.date()
            .nullable()
            .max(new Date(), `You Can not add Future Date is Your Birth Day`)
            .required("Date Of Birth field required"),
        })}
        onSubmit={(values, formikHelpers) => {
          console.log("values", values);
          formikHelpers.resetForm();
        }}
      >
        {({ errors, touched, values }) => (
          <Box>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box>
                    <CustomTextField
                      label="Company Website"
                      name="companyWebite"
                    />
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box>
                    <DatePicker label="Joining Date" name="joinDate" />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <DatePicker label="End Date" name="endDate" />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box></Box>
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

export default ProfessionalForm;
