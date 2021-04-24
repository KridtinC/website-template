import { useEffect } from 'react';
import samplepic from '../../assets/sample.jpg'
import AOS from "aos";

export interface Options {
    data: string
    isRTL: boolean
}

const featuredContainerStyle = {
    display: 'flex',
    width: "100%",
    height: "700px",
    borderStyle: "solid",
    alignItems: "center",
};

const featuredContainerRTLStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: "100%",
    height: "700px",
    borderStyle: "solid",
    alignItems: "center",
};

const featuredPicStyle = {
    width: "auto",
    height: "50%",
    padding: "10px",
};

function FeaturedItem(props: Options) {
    if (props.isRTL) {
        return (
            <div style={featuredContainerRTLStyle} data-aos="fade-left">
                {props.data}
                <img src={samplepic} alt="" style={featuredPicStyle} />
            </div>
        )
    }
    return (
        <div style={featuredContainerStyle} data-aos="fade-right">
            <img src={samplepic} alt="" style={featuredPicStyle} />
            <p>{props.data}</p>
        </div>
    )
}

export default FeaturedItem