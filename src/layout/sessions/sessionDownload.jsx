import React from "react";
import Button from "../../components/Button/Button";
import styles from "./sessionDownload.module.scss";

function SessionDownload({ isMobile, id }) {
    return (
        <div id={id} className={styles.wrapBox}>
            <div className={styles.box}>
                <h2>Download the app now</h2>
                <p>
                    Available on your favorite store. Start your premium
                    experience now.
                </p>
                <div className={styles.wrapButton}>
                    <Button title="Play Store" className={styles.btn} />
                    <Button
                        title="App Store"
                        className={styles.btn + " " + styles.btnTransparent}
                    />
                </div>
            </div>
        </div>
    );
}

export default SessionDownload;
