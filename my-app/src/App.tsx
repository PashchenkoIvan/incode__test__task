import styles from './App.module.css';
import Header from './Components/Header/Header'
import MainPart from "./Components/MainPart/MainPart";
import {useState} from "react";


function App() {

    const [arr, set__arr] = useState<Array<any>>([])
    const array = (value: any) => {
        set__arr(value)
    }

  return (
    <div className={styles.container}>
        <Header onValueChange={array}/>
        <MainPart array={arr}/>
    </div>
  );
}

export default App;
