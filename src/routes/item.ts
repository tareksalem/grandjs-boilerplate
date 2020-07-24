import {Router, View, GET, POST, PATCH, PUT, DELETE, MiddleWare, Request, Response} from "grandjs"
import {InjectService} from "grand-connectors"
import ItemMiddleWare from "../middleWares/item";
import {ItemController} from "../controllers/item.controller"
import { IResponse } from "grandjs/lib/common";

@InjectService("Item", "services", ItemController)
export class ItemRouter extends Router{
    constructor(props) {
        super(props);
    }
    services: {
        Item: ItemController
    }
    @POST({url: "/item", middleWares: [
       ItemMiddleWare.add.bind(ItemMiddleWare)
    ]})
    add(req:Request, res:Response, next:Function) {
        this.services.Item.add(req.data).then((result) => {
            return res.status(result.status).json(result)
        }).catch((err:IResponse) => {
            return res.status(err.status).json(err);
        })
    }
    @GET({url: "/items"})
     list(req:Request, res:Response, next:Function) {
         this.services.Item.list().then((result) => {
             return res.status(result.status).json(result)
         }).catch((err:IResponse) => {
             return res.status(err.status).json(err);
         })
     }
}

