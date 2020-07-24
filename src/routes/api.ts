import {Router, GET} from "grandjs";
import {ItemRouter} from "./item";
export class Api extends Router{
    constructor(props) {
        super(props);
        // this.globalMiddleWares = [(req, rss, next) => {
        //     console.log("ddd")
        //     return next();
        // }]
        this.useRouter(ItemRouter);
    }
}