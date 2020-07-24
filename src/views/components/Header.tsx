

var {View} = require("grandjs");


var Header = (props:{title:string}) => {
    return (
        <head>
            <meta charset="utf-8"/>
            <title>{props.title}</title>
        </head>
    )
}


module.exports = Header;