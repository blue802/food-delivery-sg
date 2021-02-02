import React from "react";
import styles from "./customSession.module.scss";

function CustomSession(props) {
    const { textSide = "right", image, content } = props;

    const _className =
        textSide === "left" ? styles.box + " " + styles.left : styles.box;

    return (
        <div className={_className}>
            <div className={styles.image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.text}>
                <h3>{content.title}</h3>
                <h2>{content.heading}</h2>
                <p>{content.description}</p>
            </div>
        </div>
    );
}

export default CustomSession;
