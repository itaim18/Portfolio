import React, { useContext } from "react";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import styles from "./VolumeIcon.module.css";
import soundContext from "../../../context/soundContext";
const VolumeIcon = ({ toggleSound }) => {
  const soundOn = useContext(soundContext);

  return (
    <div onClick={toggleSound} className={styles.volume}>
      {soundOn.soundOn ? <BsFillVolumeUpFill /> : <BsFillVolumeMuteFill />}
    </div>
  );
};

export default VolumeIcon;
