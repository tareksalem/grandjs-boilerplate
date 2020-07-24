import {Router, View, GET, POST, PATCH, PUT, DELETE, MiddleWare} from "grandjs"
const BasePage = View.importJsx("./pages/BasePage.tsx");

export class Main extends Router{
    @GET({
        url: "/"
    })
    getHomePage() {
        return this.res.render(BasePage, {title: "Grandjs", message: "Build A solid Applications!"})
    }
}

