import {InjectDataSource, InjectModel, InjectService, Repository} from "grand-connectors"
import {EItem} from "../entities/item";
import {IItem} from "../interfaces/item"
import {Constructable} from "../interfaces/index"
import {APiResponse, APiSuccess, APiResponseInterface, APiType, APiError} from "grandjs/lib/common";

export class ItemRepository extends Repository{
    @InjectModel({
        Entity: EItem
    })
    Item: {
        Entity: Constructable<EItem>
    }
    items: IItem[] = []
    // validate item
    async validateItem(item:IItem):Promise<APiSuccess | APiError> {
        let entity = new this.Item.Entity(item);
        // validate
        entity.functions.validate();
        // check if required fields are found
        if(entity.validations.length < 1) {
            return Promise.resolve(
                new APiSuccess({
                    status: 200,
                    textCode: "SUCCESS",
                    data: entity.functions.toObject()
                })
            )
        } else {
            return Promise.reject(
                new APiError({
                    status: 422,
                    textCode: "VALIDATIONS_ERROR",
                    validations: entity.validations
                })
            )
        }
    }
    // add new item
    async add(item:IItem):Promise<APiSuccess | APiError> {
        try {
            this.items.push(item);
            return Promise.resolve(new APiSuccess(
                {
                    status: 200,
                    textCode: "SUCCESS"
                }
            ))
        } catch(err) {
            return Promise.reject(
                new APiError({
                    status: 400,
                    textCode: "PROCESS_FAILED"
                })
            )
        }
    }
    // list items
    async list():Promise<APiSuccess | APiError> {
        try {
            let data = this.items;
            return Promise.resolve(
                new APiSuccess({
                    status: 200,
                    textCode: "SUCCESS",
                    data
                })
            )
        } catch(err) {
            return Promise.reject(
                new APiError({
                    status: 400,
                    textCode: "PROCESS_FAILED"
                })
            )
        }
    }
}