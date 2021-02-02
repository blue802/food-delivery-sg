import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import styles from "./navbar.module.scss";
import logo from "../../asset/images/logo.png";

function Navbar({ breaking }) {
    const [active, setActive] = useState("Home");
    const [isShowingMenu, setIsShowingMenu] = useState(false);

    const navigationConfig = [
        { title: "Home", link: "#home" },
        { title: "Product", link: "#product" },
        { title: "Download", link: "#download" },
        { title: "Contact", link: "#contact" },
    ];

    const listNavigationItem = navigationConfig.map((item) => (
        <li className={styles.item}>
            <a
                href={item.link}
                className={
                    active === item.title
                        ? `${styles.link} ${styles.active}`
                        : styles.link
                }
                onClick={() => {
                    setActive(item.title);
                    setIsShowingMenu(false);
                }}
            >
                {item.title}
            </a>
        </li>
    ));

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            {breaking ? (
                <HiMenu
                    className={styles.menuIcon}
                    onClick={() => setIsShowingMenu(true)}
                />
            ) : (
                <ul className={styles.hstack}>{listNavigationItem}</ul>
            )}
            <div
                className={
                    isShowingMenu
                        ? `${styles.menu} ${styles.showing}`
                        : styles.menu
                }
            >
                <HiX
                    className={styles.closeIcon}
                    onClick={() => setIsShowingMenu(false)}
                />
                <ul className={styles.vstack}>{listNavigationItem}</ul>
            </div>
        </div>
    );
}

export default Navbar;
