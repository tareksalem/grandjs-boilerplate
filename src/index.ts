import {Server, View} from "grandjs";
View.settings.set("views", "/src/views");
import {initRoutes} from "./routes/index";
import path from "path";

Server.setConfig({
    port: 3000,
    // enable native parsing for forms and uploaded files instead of using body-parser
    nativeParsing: true
})


Server.static({
    url: "/assets",
    path: path.join(process.cwd(), "src/assets")
})

Server.initServer(() => {
    console.log("server now is running!");
    initRoutes();
});
