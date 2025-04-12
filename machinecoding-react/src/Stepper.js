import React, { useState } from "react";

const Stepper = ({ steps, currentStep }) => {
  return (
    <div style={styles.container}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} style={styles.stepWrapper}>
            <div
              style={{
                ...styles.circle,
                backgroundColor: isActive
                  ? "blue"
                  : isCompleted
                  ? "green"
                  : "#ccc",
              }}
            >
              {index + 1}
            </div>
            <div style={{ marginTop: 4 }}>{step}</div>
            {index !== steps.length - 1 && <div style={styles.line} />}
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  stepWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    margin: "0 20px",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  line: {
    position: "absolute",
    top: 15,
    left: "100%",
    height: 2,
    width: 40,
    backgroundColor: "#ccc",
  },
};

const steps = ["Basic Info", "Details", "Review", "Complete"];

const Step = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h2>React Stepper</h2>
      <Stepper steps={steps} currentStep={currentStep} />
      <div style={{ marginBottom: 20 }}>
        <h3>{steps[currentStep]}</h3>
        <p>This is content for step {currentStep + 1}</p>
      </div>
      <button onClick={prevStep} disabled={currentStep === 0}>
        Back
      </button>
      <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
        Next
      </button>
    </div>
  );
};

export default Step;
