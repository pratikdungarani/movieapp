import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Box, Button, Step, Stepper, StepLabel } from "@mui/material";

const stepsList = [
  "Personal Information",
  "Professional Information",
  "Review submit",
];

function MultiFormtepForm({ children, initialValues, onSubmit }) {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);
  const [completed, setCompleted] = useState(false);
  const currentStep = steps[stepNumber];
  const totalSteps = steps.length;

  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (values, res) => {
    if (currentStep.props.onSubmit) {
      await currentStep.props.onSubmit(values, res);
    }
    if (isLastStep) {
      setCompleted(true);
      return onSubmit(values, res);
    } else {
      res.setTouched({});
      next(values);
    }
  };
  const resetForm = () => {
    setStepNumber(0);
    setCompleted(false);
  };
  return (
    <div>
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={currentStep?.props?.validationSchema}
      >
        {(formik) => (
          <Form>
            <Box sx={{ my: 2 }}>
              <Stepper activeStep={stepNumber}>
                {stepsList.map((label, index) => {
                  return (
                    <Step
                      key={label}
                      completed={stepNumber > index || completed}
                    >
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
            <p>
              Step {stepNumber + 1} of {totalSteps}
            </p>

            {/* Form Fields */}
            {currentStep}

            {!completed ? (
              <>
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
                    {isLastStep ? "Finish" : "Next"}
                  </Button>
                </Box>
              </>
            ) : (
              <Button onClick={() => resetForm()}>Reset</Button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MultiFormtepForm;

export const FormStep = ({ children }) => children;
