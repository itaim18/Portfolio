import { useState, useEffect } from "react";
import { useRive, useStateMachineInput } from "rive-react";
import styles from "./FaceIcon.module.css";
function FaceIcon() {
  var scroll;
  window.addEventListener("scroll", () => {
    scroll = scrollY;
  });
  const STATE_MACHINE_NAME = "Scroll Machine";
  const INPUT_NAME = "scrollY";
  const { rive, RiveComponent } = useRive({
    src: "face_icon.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });
  var scrollPct = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME, 0);
  useEffect(() => {
    let scrollListener;
    if (scrollPct) {
      const scrollCallback = () => {
        scrollPct.value = scrollY;
      };
      scrollListener = document.addEventListener("scroll", scrollCallback);
    }
    return () => {
      if (scrollListener) {
        document.removeEventListener("scroll", scrollListener);
      }
    };
  }, [scrollPct]);

  return <RiveComponent className={styles.face} id="face" />;
}

export default FaceIcon;
