import {Main} from "./main"

export const initRoutes = () => {
    const main = new Main({base: "/"});
    main.build();
}