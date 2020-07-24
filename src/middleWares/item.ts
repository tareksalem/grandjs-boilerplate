import {Request, Response} from "grandjs"
import {InjectService} from "grand-connectors";
import {ItemController} from "../controllers/item.controller";
import { APiError } from "grandjs/lib/common";

@InjectService("Item", "services", ItemController)
class ItemMiddleWare{
    services: {
        Item: ItemController
    }
    add(req: Request, res: Response, next:Function) {
        this.services.Item.validate(<any>req.data).then((res) => {
            req.data = res.data;
            return next();
        }).catch((err) => {
            return res.status(err.status).json(err);
        })
    }
}


export default new ItemMiddleWare;

