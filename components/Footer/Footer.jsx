import React from "react";

import Typography from "../Typography";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["links"]}>
        <div className={styles["link-column"]}>
          <Typography
            color="textSecondary"
            variant="body1"
            className={styles["link-title"]}
          >
            Product
          </Typography>
          <a href="/">
            <Typography color="secondary" variant="body2">
              Pricing
            </Typography>
          </a>
        </div>
        <div className={styles["link-column"]}>
          <Typography
            color="textSecondary"
            variant="body1"
            className={styles["link-title"]}
          >
            Company
          </Typography>
          <a href="/">
            <Typography color="secondary" variant="body2">
              Blog
            </Typography>
          </a>
        </div>
        <div className={styles["link-column"]}>
          <Typography
            color="textSecondary"
            variant="body1"
            className={styles["link-title"]}
          >
            Help
          </Typography>
          <a href="/">
            <Typography color="secondary" variant="body2">
              Privacy Policy
            </Typography>
          </a>
          <a href="/">
            <Typography color="secondary" variant="body2">
              Terms of Use
            </Typography>
          </a>
        </div>
        <div className={styles["link-column"]}>
          <Typography
            color="textSecondary"
            variant="body1"
            className={styles["link-title"]}
          >
            Contact
          </Typography>
          <a href="/">
            <Typography color="secondary" variant="body2">
              Contact Us
            </Typography>
          </a>
        </div>
      </div>
      <div className={styles["bottom"]}>
        <Typography color="secondary">
          (c) 2021 TPM Inc. All Rights Reserved
        </Typography>
        <div className={styles["social"]}>
          <a href="/">
            <img
              src="/images/linked-in.png"
              alt="linkedin"
              className={styles["social-icon"]}
            />
          </a>
          <a href="/">
            <img
              src="/images/twitter.png"
              alt="twitter"
              className={styles["social-icon"]}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
