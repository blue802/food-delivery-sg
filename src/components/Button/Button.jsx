import React from "react";
import styles from "./Button.module.scss";

function Button({ title, type = "button", className, disabled = false }) {
    const _className = `${styles.button} ${className}`;

    if (disabled) {
        return (
            <button type={type} className={_className} disabled>
                {title}
            </button>
        );
    }

    return (
        <button type={type} className={_className}>
            {title}
        </button>
    );
}

export default Button;
