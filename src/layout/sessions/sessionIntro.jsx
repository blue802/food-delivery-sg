import React from "react";

import styles from "./sessionIntro.module.scss";
import cpLeftSide from "../../asset/images/cp-left-side.png";
import cpRightSide from "../../asset/images/cp-right-side.png";

function SessionIntro() {
    return (
        <div className={styles.wrapBox}>
            <div className={styles.box}>
                <img src={cpLeftSide} className={styles.cpLeftSide} alt="" />
                <img src={cpRightSide} className={styles.cpRightSide} alt="" />
            </div>
        </div>
    );
}

export default SessionIntro;
