import React from "react";
import Button from "../../components/Button/Button";
import styles from "./header.module.scss";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <p className={styles.title}>Food App</p>
                <p className={styles.heading}>
                    Why stay hungry when you can order from Bella Onojie
                </p>
                <p className={styles.description}>
                    Download the bella onojie's food app now on
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

export default Header;
