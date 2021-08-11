import {DeleteOutlined} from "@ant-design/icons";
import {Button} from "antd";


export const DeleteButton = () => {


    const onDelete = () => {

    }


    return (
        <Button
            type="primary"
            icon={<DeleteOutlined/>}
            onClick={() => onDelete}
        />
    )
}

