import s from "./Settings.module.css";
import {House} from "./House/House";


export const Settings = () => {

    return <div className={s.app_settings}>
        <header>
            {"Houses List"}
        </header>
        <House/>
        <House/>
        <House/>
        <House/>
        <footer>
            <button>Build a new house</button>
        </footer>
    </div>
}