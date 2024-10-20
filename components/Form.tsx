import styles from "../styles/pages/Home.module.scss";
import React from "react";

type FormProps = {
    children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({children}) => {
    return (
        <div className={styles.form}>
            {children}
        </div>
        )
}

export default Form;