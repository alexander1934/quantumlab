import React from "react";
import styles from '../styles/components/Button.module.scss'

type ButtonProps = {
    title: string;
}

const Button: React.FC<ButtonProps> = ({title}) => {
    return (
        <button className={styles.button}>{title}</button>
    )
}

export default Button;