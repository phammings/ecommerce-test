import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "antd";

import { fetchPerfumesByInputText } from "../redux-toolkit/perfumes/perfumes-thunks";

export const useSearch = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [searchTypeValue, setSearchTypeValue] = useState("BRAND");
    const [searchValue, setSearchValue] = useState("");

    const handleChangeSelect = (value) => {
        setSearchTypeValue(value);
    };

    const onSearch = (data) => {
        setSearchValue(data.searchValue);
        dispatch(fetchPerfumesByInputText({ searchType: searchTypeValue, text: data.searchValue, currentPage: 0 }));
    };

    const resetFields = () => {
        form.resetFields();
    };

    return { searchValue, searchTypeValue, form, resetFields, handleChangeSelect, onSearch };
};
