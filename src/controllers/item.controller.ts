import {InjectService} from "grand-connectors"
import {ItemRepository} from "../repositories/item"
import {IResponse, APiError} from "grandjs/lib/common"

@InjectService("Item", "services", ItemRepository)
export class ItemController{
    services: {
        Item: ItemRepository
    }
    async add(data:any):Promise<IResponse> {
        return this.services.Item.add(data).then(res => {
            
            return Promise.resolve(res.getResponse());
        }).catch((err:APiError) => {
            return Promise.reject(err.getResponse())
        })
    }
    async list():Promise<IResponse> {
        return this.services.Item.list().then(res => {
            return Promise.resolve(res.getResponse());
        }).catch((err:APiError) => {
            return Promise.reject(err.getResponse())
        })
    }
    async validate(data:any):Promise<IResponse> {
        return this.services.Item.validateItem(data).then(res => {
            return Promise.resolve(res.getResponse());
        }).catch((err:APiError) => {
            return Promise.reject(err.getResponse())
        })
    }
}