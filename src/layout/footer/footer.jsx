import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./footer.module.scss";
import logo from "../../asset/images/logo.png";

function Footer({ id }) {
    return (
        <div id={id} className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} w="100%" alt="" />
            </div>
            <div className={styles.flexCenterRow}>
                <div className={styles.wrapIcons}>
                    <FaTwitter fontSize="2rem" className={styles.icon} />
                    <FaFacebookSquare fontSize="2rem" className={styles.icon} />
                    <AiFillInstagram
                        fontSize="2.3rem"
                        className={styles.icon}
                    />
                </div>
            </div>
            <p className={styles.copyright}>
                Copyright <span>&#169;</span> 2020 bellaonojie.com
            </p>
            <p>Just type what's on your mind and we'll</p>
        </div>
    );
}

export default Footer;
