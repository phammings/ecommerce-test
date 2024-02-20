import React from "react";
import { Card, Col, Typography } from "antd";

import "./OrderItem.css";

const OrderItem = ({ perfume, quantity }) => {
    return (
        <Col span={12}>
            <Card
                className={"menu-card"}
                cover={<img className={"menu-card-image"} alt={perfume.perfumeTitle} src={perfume.filename} />}
            >
                <div className={"menu-content"}>
                    <Typography.Text strong>{perfume.perfumer}</Typography.Text>
                    <Typography.Text strong>{perfume.perfumeTitle}</Typography.Text>
                    <Typography.Text strong>Price: $ {perfume.price}</Typography.Text>
                    <Typography.Text strong>Quantity: {quantity}</Typography.Text>
                </div>
            </Card>
        </Col>
    );
};

export default OrderItem;
