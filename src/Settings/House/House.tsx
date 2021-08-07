import s from "./House.module.css";
import {IntegerStep} from "./IntegerStep";
import {SelectColor} from "./SelectColor";
import 'antd/dist/antd.css';


export const House = () => {


    return <div className={s.house}>
        <div>
            <IntegerStep/>
        </div>
        <div>
            <SelectColor/>
        </div>

    </div>
}

