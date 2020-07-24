
import {Server} from "grandjs";
const {View} = require("grandjs");
const Style = {
    body: {
        margin: 0,
        padding: 0
    },
    container: {
        backgroundColor: "#fff",
        padding: "10px",
        height: "100%"
    },
    imageContainer: {
        width: 350,
        height:350,
        margin: "auto",
        marginTop: "50px"
    },
    img: {
        width: "100%",
        height: "100%"
    },
    title: {
        width: "max-content",
        margin: "auto"
    }
}

const Body = (props:{message:string, title:string}) => {
    return (
        <body style={Style.body}>
        <div style={Style.container}>
        <div style={Style.imageContainer}>
            <img src="/assets/grandjs.png" style={Style.img}/>
        </div>
            <h2 style={Style.title}>{props.message}</h2>
        </div>
        </body>
    )
}


module.exports = Body;