import s from "./Town.module.css";
import {Roof} from "./House/Roof";
import {Floor} from "./House/Floor";
import {Basement} from "./House/Basement";

export const Town = () => {

    return <div className={s.town}>
        <Roof/>
        <Floor/>
        <Basement/>
    </div>
}