import { useRive, useStateMachineInput } from "rive-react";
import styles from "./MenuIcon.module.css";
function MenuIcon() {
  const STATE_MACHINE_NAME = "switcher";
  const INPUT_NAME = "switch";
  const { rive, RiveComponent } = useRive({
    src: "menu.riv",
    stateMachines: STATE_MACHINE_NAME,

    autoplay: true,
  });
  var onClickInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);

  return (
    <RiveComponent
      className={styles.menuIcon}
      onClick={() => onClickInput.fire()}
    />
  );
}
export default MenuIcon;
