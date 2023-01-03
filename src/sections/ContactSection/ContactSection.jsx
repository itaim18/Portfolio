import React, { useEffect } from "react";
import Card from "../../components/UI/Card/Card";
import styles from "./ContactSection.module.css";
const ContactSection = () => {
  function copyToClipboard() {
    var Text = document.getElementById("content");
    var copyText = Text.textContent;
    navigator.clipboard.writeText(copyText).then(() => {
      // Alert the user that the action took place.
      // Nobody likes hidden stuff being done under the hood!

      Text.textContent = "Copied!";
      Text.style.color = "#00a7c9";
      setTimeout(() => {
        document.getElementById("content").textContent = "itaim148@gmail.com";
        Text.style.color = "coral";
      }, 3000);
    });
  }
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
      <div className={styles.links}>
        <h1>Stay In Touch</h1>
        <ul style={{ listStyle: "none", position: "relative" }}>
          <li>
            <a href="https://www.linkedin.com/in/itai-mizlish/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/itaim18">Github</a>
          </li>
          <li>
            <a href="https://medium.com/@itaim148">Medium</a>
          </li>
          <li>
            {/* <a href="mailto: itaim148@gmail.com"> Email</a> */}
            <p
              className={styles.content}
              id="content"
              onClick={copyToClipboard}
              style={{ color: "coral", wordBreak: "break-all" }}
            >
              itaim148@gmail.com
            </p>

            <p style={{ color: "coral" }}> Central, Israel</p>

            <p style={{ color: "coral" }}> Created In Dec 22</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
