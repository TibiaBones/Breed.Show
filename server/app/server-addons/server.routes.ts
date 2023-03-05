import userRouter from "../routes/user.routes";
import {ServerConstants} from "./server.constants";


/**
 * Used to set up extra routes
 * and controllers
 * @export
 * @const
 */

const ServerRoutes = {
    configureRoutes: app => {
        // Set our api routes
        app.use(ServerConstants.API_PREFIX, userRouter);
    }
};

export default ServerRoutes;
