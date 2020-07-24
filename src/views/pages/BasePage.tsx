const {View} = require("grandjs/lib");
import {Server, validation} from "grandjs";
const Header = View.importJsx("./components/Header.tsx");
const Body = View.importJsx("./components/Body.tsx");

var BasePage = (props: {title:string, message: string}) => {
    return (
        <html lang="en">
            <Header title={props.title}/>
            <Body title={props.title} message={props.message}/>
        </html>
    )
}


module.exports = BasePage;