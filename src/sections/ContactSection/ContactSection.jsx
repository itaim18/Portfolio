import React from "react";
import Card from "../../components/UI/Card/Card";
import styles from "./ContactSection.module.css";
const ContactSection = () => {
  return (
    <div id="contact">
      <h1 style={{ width: "fit-content", margin: "5px auto 5px" }}>Contact</h1>
      <Card>
        <img
          className={styles.gif}
          src="assets/videos/doctorwho.webp"
          alt="doctor"
        />
        <form className={styles.form} action="">
          <h1>
            Suggest new ideas
            <span
              style={{ fontSize: "32px", position: "relative", bottom: "5px" }}
            >
              💡
            </span>
          </h1>
          <label style={{ fontWeight: "500" }} htmlFor="name">
            Name:
          </label>
          <input type="text" name="name" placeholder="john" />
          <label style={{ fontWeight: "500" }} htmlFor="email">
            email:
          </label>
          <input type="text" name="email" placeholder="john@gmail.com" />
          <label style={{ fontWeight: "500" }} htmlFor="suggest">
            Suggestion:
          </label>
          <textarea type="text" name="suggest" placeholder="more ducks..." />
          <button type="submit">send</button>
        </form>
      </Card>
      <img
        src="assets/images/profilePhoto4.png"
        alt="profile"
        className={styles.profile}
      />
      <div
        className={styles.links}
        style={{
          width: "75%",
          columnCount: 3,
          columnGap: "10px",
          columnRule: "5px dashed coral",
          margin: "10px",
        }}
      >
        <h1
          style={{
            width: "50%",
            columnSpan: "all",
            padding: "10px",
            margin: "20px auto 0",
          }}
        >
          Stay In Touch
        </h1>
        <ul style={{ listStyle: "none", position: "relative" }}>
          <li>
            <a href="">resume</a>
          </li>
          <li>
            <a href="">linkedin</a>
          </li>
          <li>
            <a href="">github</a>
          </li>
          <li>
            <a href="">instagram </a>
          </li>
          <li>
            <a href=""> email</a>
          </li>
          <li>
            <a href="">address</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
