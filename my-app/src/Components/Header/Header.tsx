import styles from './Header.module.css';
import {FC} from "react";
import {useState} from "react";
import axios from 'axios'

interface Props {
    onValueChange: (value: any) => void
}

const Header:FC<Props> = ({onValueChange}) => {
    const gh = require('github-url-to-object');

    const [url, set__url] = useState<string>("")

    const generate__url__function = () => {
        axios.get(`https://api.github.com/repos/${gh(url).user}/${gh(url).repo}/issues`)
            .then(res => onValueChange(res.data))
    }

    return (
        <div className={styles.container}>
            <input name="inpt" type="text" placeholder="Enter repo URL" onChange={(event) =>set__url(event.target.value)}/>
            <button className={styles.bigBtn} onClick={() => generate__url__function()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                </svg>
                Load issues
            </button>
            <button className={styles.smallBtn} onClick={() => generate__url__function()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                </svg>
            </button>
        </div>
    );
};

export default Header;