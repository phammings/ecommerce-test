import React, { FC, ReactElement } from "react";
import { Carousel, Typography } from "antd";

import { brandsItem } from "./SliderBrandsData";
import SliderBrandsItem from "./SliderBrandsItem/SliderBrandsItem";
import "./SliderBrands.css";

const SliderBrands: FC = (): ReactElement => {
    return (
        <div className={"brands-wrapper"}>
            <Carousel className={"brands-carousel"} autoplay>
                <SliderBrandsItem brands={brandsItem.slice(0, 4)} />
                <SliderBrandsItem brands={brandsItem.slice(4, 8)} />
                <SliderBrandsItem brands={brandsItem.slice(8, 12)} />
            </Carousel>
        </div>
    );
};

export default SliderBrands;
