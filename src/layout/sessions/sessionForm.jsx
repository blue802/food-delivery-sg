import React, { useEffect, useState } from "react";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

import Button from "../../components/Button/Button";
import styles from "./sessionForm.module.scss";

function SessionForm() {
    const [listchecked, setListchecked] = useState([false, false]);
    const [fullName, setFullName] = useState({ err: "Required!", value: "" });
    const [phone, setPhone] = useState({ err: "Required!", value: "" });
    const [email, setEmail] = useState({ err: "Required!", value: "" });
    const [address, setAddress] = useState({ err: null, value: "" });
    const [allowSubmit, setAllowSubmit] = useState(false);

    useEffect(() => {
        if (
            !fullName.err &&
            !phone.err &&
            !email.err &&
            listchecked[0] &&
            listchecked[1]
        ) {
            setAllowSubmit(true);
        } else {
            setAllowSubmit(false);
        }
    }, [fullName.err, phone.err, email.err, address.err, listchecked]);

    const _onSubmit = (e) => {
        e.preventDefault();
        alert(`
            Full Name: ${fullName.value}
            Phone: ${phone.value}
            Email: ${email.value}
            Address: ${address.value}
        `);
        setFullName({ err: "Required!", value: "" });
        setPhone({ err: "Required!", value: "" });
        setEmail({ err: "Required!", value: "" });
        setAddress({ err: null, value: "" });
        setListchecked([false, false]);
    };

    const validateEmail = (email) => {
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(String(email).toLowerCase());
    };

    const validatePhone = (phone) => {
        const reg = /(09[0-9]|032[0-9]|01[0-9]{2}|08[0-9])+([0-9]{6})/;
        return reg.test(String(phone));
    };

    const _onHandleFullName = (e) => {
        const nameInput = e.target.value;
        const dummy = { err: null, value: nameInput };
        if (!nameInput) {
            dummy.err = "Required!";
        }
        setFullName(dummy);
    };

    const _onHandlePhone = (e) => {
        const phoneInput = e.target.value;
        const dummy = { err: null, value: phoneInput };
        if (!phoneInput) {
            dummy.err = "Required!";
        }
        if (!validatePhone(phoneInput)) {
            dummy.err = "Phone number is invalid!";
        }
        setPhone(dummy);
    };

    const _onHandleEmail = (e) => {
        const emailInput = e.target.value;
        const dummy = { err: null, value: emailInput };
        if (!emailInput) {
            dummy.err = "Required!";
        }
        if (!validateEmail(emailInput)) {
            dummy.err = "Email is invalid!";
        }
        setEmail(dummy);
    };

    const _onHandleAddress = (e) => {
        setAddress(e.target.value);
    };
    console.log(allowSubmit);
    return (
        <div className={styles.wrapForm}>
            <h2>Sign Up Form</h2>
            <h3>Attention</h3>
            <p>
                The theme object is where you define your application's color
                palette, type scale, font stacks, breakpoints, border radius
                values, and more.
            </p>
            <form action="" className={styles.form} onSubmit={_onSubmit}>
                <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullName">
                            Full Name <span style={{ color: "red" }}>*</span>
                            {fullName.err && (
                                <span className={styles.error}>
                                    {fullName.err}
                                </span>
                            )}
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={fullName.value}
                            onChange={_onHandleFullName}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">
                            Phone <span style={{ color: "red" }}>*</span>
                            {phone.err && (
                                <span className={styles.error}>
                                    {phone.err}
                                </span>
                            )}
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone.value}
                            onChange={_onHandlePhone}
                            placeholder="(+84)"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">
                            Email <span style={{ color: "red" }}>*</span>
                            {email.err && (
                                <span className={styles.error}>
                                    {email.err}
                                </span>
                            )}
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={email.value}
                            onChange={_onHandleEmail}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address.value}
                            onChange={_onHandleAddress}
                        />
                    </div>
                </div>
                <div className={styles.formGroupCheckbox}>
                    <div>
                        <label htmlFor="option1">
                            Accept with bla bla...
                            {listchecked[0] ? (
                                <FaCheckSquare className={styles.checkIcon} />
                            ) : (
                                <FaRegSquare className={styles.checkIcon} />
                            )}
                        </label>
                        <input
                            type="checkbox"
                            id="option1"
                            name="option1"
                            value=""
                            onChange={() =>
                                setListchecked([
                                    !listchecked[0],
                                    listchecked[1],
                                ])
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="option2">
                            Accept with bla bla...
                            {listchecked[1] ? (
                                <FaCheckSquare className={styles.checkIcon} />
                            ) : (
                                <FaRegSquare className={styles.checkIcon} />
                            )}
                        </label>
                        <input
                            type="checkbox"
                            id="option2"
                            name="option2"
                            value=""
                            onChange={() =>
                                setListchecked([
                                    listchecked[0],
                                    !listchecked[1],
                                ])
                            }
                        />
                    </div>
                </div>
                <Button
                    type="submit"
                    title="Submit"
                    className={
                        allowSubmit
                            ? styles.btnSubmit
                            : `${styles.btnSubmit} ${styles.disabled}`
                    }
                    disabled={allowSubmit ? false : true}
                />
            </form>
        </div>
    );
}

export default SessionForm;
