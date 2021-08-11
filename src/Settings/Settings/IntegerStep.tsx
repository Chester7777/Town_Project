import {Col, InputNumber, Row, Slider, Switch} from "antd";
import {useState} from "react";


export const IntegerStep = () => {
    const [disabled, setDisabled] = useState<boolean>(false);
    let [inputValue, setInputValue] = useState<number>(1);

    const handleDisabledChange = () => {
        setDisabled(!disabled)
    }
    const onChange = (value: number) => {
        setInputValue(
            inputValue = value
        );
    };


    return (
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={20}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={20}
                    style={{margin: '0 16px'}}
                    value={inputValue}
                    onChange={onChange}
                    disabled={disabled}
                />
                Disabled: <Switch size="small" checked={disabled} onChange={handleDisabledChange}/>
            </Col>
        </Row>
    );
}
