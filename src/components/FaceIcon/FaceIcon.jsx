import { useRive, useStateMachineInput } from "rive-react";
import styles from "./FaceIcon.module.css";
function FaceIcon() {
  const { rive, RiveComponent } = useRive({
    src: "rive.riv",
    stateMachines: "State Machine 1",
    animations: "idle",
    autoplay: true,
  });

  return <RiveComponent className={styles.face} />;
}

export default FaceIcon;
