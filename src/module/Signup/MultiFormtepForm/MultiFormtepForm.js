import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Box, Button } from "@mui/material";

function MultiFormtepForm({ children, initialValues, onSubmit }) {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);
  console.log("children", children, steps);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, res) => {
    console.log("step", step, "res", res);
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, res);
    }
    if (isLastStep) {
      return onSubmit(values, res);
    } else {
      res.setTouched({});
      next(values);
    }
  };
  return (
    <div>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {(formik) => (
          <Form>
            <p>
              Step {stepNumber + 1} of {totalSteps}
            </p>

            {/* Form Fields */}
            {step}

            <Box sx={{ my: 2 }}>
              {stepNumber > 0 && (
                <Button
                  variant="outlined"
                  onClick={() => previous(formik.values)}
                  type="button"
                >
                  Back
                </Button>
              )}
              <Button
                disabled={formik.isSubmitting}
                type="submit"
                variant="contained"
                color="primary"
              >
                {isLastStep ? "Submit" : "Next"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MultiFormtepForm;

export const FormStep = ({ children }) => children;
