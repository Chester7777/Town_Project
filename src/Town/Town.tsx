import s from "./Town.module.css";
import {Roof} from "./House/Roof";
import {Floor} from "./House/Floor";
import {Basement} from "./House/Basement";

export const Town = () => {
    let floor = [<Floor/>]

    return <div className={s.town}>
        <Roof/>
        {floor.map(f=><div>{f}</div>)}
        <Basement/>
    </div>
}