import s from "./Setting.module.css";
import {IntegerStep} from "./IntegerStep";
import {SelectColor} from "./SelectColor";
import 'antd/dist/antd.css';
import {DeleteButton} from "./DeleteButton";


export const Setting = () => {


    return <div className={s.house}>
        <div>
            <IntegerStep/>
        </div>
        <div>
            <SelectColor/>
        </div>
        <div>
            <DeleteButton/>
        </div>
    </div>
}

