import React from "react";
import styles from '../styles/components/Input.module.scss'

type InputProps = {
    placeholder: string;
}

const Input: React.FC<InputProps> = ({placeholder}) => {
    return (
        <input className={styles.input} type="text" placeholder={placeholder} />
    )
}

export default Input;