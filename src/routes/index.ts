import {Main} from "./main"
import {ItemRouter} from "./item";
import {Api} from "./api";
export const initRoutes = () => {
    const main = new Main({base: "/"});
    main.build();
    const api = new Api({base: "/api"});
    api.build();
}