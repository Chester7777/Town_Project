import s from "./Settings.module.css";
import {House} from "./House/House";
import {HomeOutlined} from "@ant-design/icons";


export const Settings = () => {

    return <div className={s.app_settings}>
        <header className={s.Header_setting}>
            {"Houses List"}
        </header>
        <House/>
        <House/>
        <House/>
        <House/>
        <footer className={s.Footer_setting}>
            <button><HomeOutlined /> Build a new house</button>
        </footer>
    </div>
}