import s from "./Settings.module.css";
import {HomeOutlined} from "@ant-design/icons";
import {Setting} from "./Settings/Setting";
import {useState} from "react";
import {Town} from "../Town/Town";


export const Settings = () => {
    // const [house, setHouse] = useState([<Town/>])

    const addHouse = () => {
        // setHouse(house)
    }

    return <div className={s.app_settings}>
        <header className={s.Header_setting}>
            {"Houses List"}
        </header>
        <Setting/>
        <Setting/>
        <Setting/>
        <Setting/>
        <footer className={s.Footer_setting}>
            <button onClick={addHouse} ><HomeOutlined/> Build a new house</button>
        </footer>
    </div>
}