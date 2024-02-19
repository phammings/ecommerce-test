import React, {FC, ReactElement, useEffect} from "react";

import Video from "./Video/Video";
import SliderBrands from "./SliderBrands/SliderBrands";
import BottomText from "./BottomText/BottomText";


const Home: FC = (): ReactElement => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <Video />
            <SliderBrands />
            <BottomText />
        </div>
    );
};

export default Home;
