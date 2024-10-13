import React from "react";
import styles from '../styles/components/Input.module.scss'

type InputProps = {
    placeholder: string;
    title: string;
}

const Input: React.FC<InputProps> = ({placeholder, title}) => {
    return (
        <>
            <p></p>
            <input className={styles.input} type="text" placeholder={placeholder}/>
        </>
    )
}

export default Input;