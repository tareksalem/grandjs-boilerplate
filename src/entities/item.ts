import {IItem} from "../interfaces/item"
import {Entity, settings, property, method} from "grand-model";

export class EItem extends Entity implements IItem{
    @property({type: String, required: true})
    name: string
    @property({type: String, required: true})
    description:string
}

