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
    const [stars, set__stars] = useState<number>(0)

    const generate__url__function = () => {
        axios.get(`https://api.github.com/repos/${gh(url).user}/${gh(url).repo}/issues`)
            .then(res => onValueChange(res.data))

        axios.get(`https://api.github.com/repos/${gh(url).user}/${gh(url).repo}`)
            .then(res => set__stars(res.data.stargazers_count))
    }

    return (
        <div className={styles.container}>
            <div className={styles.topBlock}>
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
            <div className={styles.bottomBlock}>
                <div className={styles.left}>
                    <a target="_blank" href={url === "" ? "#" : `https://github.com/${gh(url).user}`}>{url === "" ? " " : gh(url).user}</a>
                    <p>{">"}</p>
                    <a target="_blank" href={url === "" ? "#" : `https://github.com/${gh(url).user}/${gh(url).repo}`}>{url === "" ? " " : gh(url).repo}</a>
                </div>
                <div className={styles.right}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                    <p>
                        {stars}
                    </p>
                    <p>
                        Stars
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;