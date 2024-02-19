import React, { FC, ReactElement } from "react";
import { Form, FormInstance, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import IconButton from "../IconButton/IconButton";

type PropsType = {
    onSearch: (data: { searchValue: string }) => void;
    form?: FormInstance<{ searchValue: string }>;
};

const InputSearch: FC<PropsType> = ({ onSearch, form }): ReactElement => {
    return (
        <Form onFinish={onSearch} form={form} style={{ display: 'flex', alignItems: 'center', marginLeft: "-30px"}}>
            <Input.Group compact style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Item name={"searchValue"} style={{ marginBottom: 0 }}>
                    <Input placeholder={"Search..."} style={{ width: 200 }} />
                </Form.Item>
                <IconButton title={"Search"} icon={<SearchOutlined />} />
            </Input.Group>
        </Form>
    );
};

export default InputSearch;
