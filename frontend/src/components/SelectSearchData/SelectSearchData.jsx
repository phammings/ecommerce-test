import React from "react";
import { Select } from "antd";
import {SearchPerfume} from "../../types/types";

const searchByData = [
    { label: "Brand", value: SearchPerfume.BRAND },
    { label: "Perfume title", value: SearchPerfume.PERFUME_TITLE },
    { label: "Manufacturer country", value: SearchPerfume.COUNTRY }
];

const SelectSearchData = ({ handleChangeSelect }) => {
    return (
        <Select defaultValue={SearchPerfume.BRAND} onChange={handleChangeSelect} style={{ width: 250 }}>
            {searchByData.map((value, index) => (
                <Select.Option key={index} value={value.value}>
                    {value.label}
                </Select.Option>
            ))}
        </Select>
    );
};

export default SelectSearchData;
