import React, { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { skills } from "./Data";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AnimatedCircularProgressbar = ({ isVisible, percentage }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Animate the progress bar by updating the state
      const animationDuration = 2000; // Set your desired animation duration in milliseconds
      const interval = 20; // Set the interval for updating the percentage
      const totalSteps = animationDuration / interval;
      let currentStep = 0;

      const increment = (percentage - animatedPercentage) / totalSteps;

      const intervalId = setInterval(() => {
        currentStep++;
        setAnimatedPercentage((prev) => {
          const nextPercentage = prev + increment;
          return nextPercentage > percentage ? percentage : nextPercentage;
        });

        if (currentStep >= totalSteps) {
          clearInterval(intervalId);
        }
      }, interval);
    }
  }, [isVisible, animatedPercentage, percentage]);

  return (
    <CircularProgressbar
      strokeWidth={8}
      text={`${animatedPercentage.toFixed(0)}%`}
      value={animatedPercentage}
      
    />
  );
};

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <AnimatedCircularProgressbar
                  isVisible={isVisible}
                  percentage={percentage}
                />
              )}
            </VisibilitySensor>
            <h3 className="title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
