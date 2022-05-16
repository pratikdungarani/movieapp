import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikController from "common/FormControls/FormikController/FormikController";

import * as Yup from "yup";
import useStyles from "./style";

function ProfessionalForm() {
  const classess = useStyles();
  const [professionalData] = useState({
    companyWebite: "",
    materialstatus: "",
    skills: [],
    joinDate: null,
    endDate: null,
  });
  const [materialArray] = useState([
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
  const checkboxOptions = [
    { label: "HTML", value: "html" },
    { label: "CSS", value: "css" },
    { label: "JavaScript", value: "javascript" },
  ];
  return (
    <div>
      <Typography variant="h5" component="h5" className={classess.titleInfo}>
        Professional Info
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box>
              <FormikController
                control="input"
                label="Company Website"
                name="companyWebite"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormikController
                control="radio"
                label="Material Status"
                options={materialArray}
                name="materialstatus"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormikController
                control="checkbox"
                label="Your skillset"
                name="skills"
                options={checkboxOptions}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormikController
                control="date"
                label="Joining Date"
                name="joinDate"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FormikController
                control="date"
                label="End Date"
                name="endDate"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box></Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default ProfessionalForm;
