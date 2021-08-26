import s from "./Settings.module.css";
import {HomeOutlined} from "@ant-design/icons";
import {Setting} from "./Settings/Setting";


export const Settings = () => {

    return <div className={s.app_settings}>
        <header className={s.Header_setting}>
            {"Houses List"}
        </header>
        <Setting/>
        <Setting/>
        <Setting/>
        <Setting/>
        <footer className={s.Footer_setting}>
            <button><HomeOutlined/> Build a new house</button>
        </footer>
    </div>
}