import samplepic from '../../assets/sample.jpg'

interface Options {
    data: string
    isRTL: boolean
}

const featuredContainerStyle = {
    display: 'flex', 
    width: "100%",
    height: "300px",
    borderStyle: "solid",
    alignItems: "center", 
};

const featuredContainerRTLStyle = {
    display: 'flex', 
    justifyContent:'flex-end',
    width: "100%",
    height: "300px",
    borderStyle: "solid",
    alignItems: "center", 
};

const featuredPicStyle = {
    width: "auto",
    height: "100%",
    padding: "10px",
};

function FeaturedItem(props: Options) {
    if (props.isRTL) {
        return (
            <div style={featuredContainerRTLStyle}>
                {props.data}
                <img src={samplepic} alt=""style={featuredPicStyle}/>
            </div>
        )
    }
    return (
        <div style={featuredContainerStyle}>
            <img src={samplepic} alt=""style={featuredPicStyle}/>
            <p>{props.data}</p>
        </div>
    )
}

export default FeaturedItem