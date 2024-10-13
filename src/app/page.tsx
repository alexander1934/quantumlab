import Input from "@/../components/Input";
import Link from "next/link";
import Button from "@/../components/Button";
import styles from "@/../styles/pages/Home.module.scss";

export default function Home() {
    return (
        <div>
            <main className={styles.main}>
                <div className={styles.form}>
                    <div className={styles.form__container}>
                        <h2 className={styles.form__title}>Начать</h2>
                        <div>
                            <Input placeholder={"Как вас зовут?"} title={"Ваше имя"}/>
                        </div>
                    </div>
                    <nav className={styles.button__container}>
                        <Link className={styles.link__container} href="/calculator" passHref>
                            <Button title={"Открыть калькулятор"}/>
                        </Link>
                        <Link className={styles.link__container} href="/generator" passHref>
                            <Button title={"Открыть генератор"}/>
                        </Link>
                    </nav>
                </div>
            </main>
        </div>
    );
}
