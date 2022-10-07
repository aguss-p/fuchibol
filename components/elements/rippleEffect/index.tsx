import React, { useState, useLayoutEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props) => props.color};
    animation-name: ripple;
    animation-duration: 1000ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

const useDebouncedRippleCleanUp = (rippleCount: any, cleanUpFunction: any) => {
  useLayoutEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, 1000 * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, 1000, cleanUpFunction]);
};

const Ripple = ({ duration = 850, color = "#fff" }) => {
  const [rippleArray, setRippleArray] = useState<any>([]);

  useDebouncedRippleCleanUp(rippleArray.length, () => {
    setRippleArray([]);
  });

  const addRipple = (event: any) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple: any, index: number) => {
          return (
            <span
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

Ripple.propTypes = {
  duration: PropTypes.number,
  color: PropTypes.string,
};

export default Ripple;
