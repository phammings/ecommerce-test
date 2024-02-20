import React, { FC, memo, ReactElement } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";


const RemoveButton = memo(({ perfumeId, deleteFromCart }) => {

    return (
        <Button onClick={() => deleteFromCart(perfumeId)} icon={<CloseOutlined />}>
            Remove
        </Button>
    );
});

export default RemoveButton;
