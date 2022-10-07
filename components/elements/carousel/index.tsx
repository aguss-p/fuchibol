import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { NextPage } from "next";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableStepper(props: SwipeableStepperPropsType) {
  const { sliders } = props;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = sliders.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 30,
          pl: 2,
          bgcolor: "background.default",
          backgroundColor: "inherit",
        }}
      >
        <Typography
          fontSize="24px"
          color="green"
          fontWeight={600}
          align="center"
          style={{ backgroundColor: "inherit" }}
        >
          {sliders[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        springConfig={{ duration: "10s", easeFunction: "...", delay: "0.5s" }}
        enableMouseEvents
      >
        {sliders.map((slider: any, index: number) => (
          <div key={slider.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  height: "600px",
                  borderRadius: "20px",
                }}
              >
                {slider.component}
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={<></>}
        backButton={<></>}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "inherit",
        }}
      />
    </Box>
  );
}

export default SwipeableStepper;

type SwipeableStepperPropsType = {
  sliders: Array<any>;
};
