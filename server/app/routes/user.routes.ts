import * as express from "express";
import userService from "../services/user.service";
import { Util } from "../shared/Util";
import userValidator from "../validators/user.validator";

const router = express.Router();

// GET requests
router.get("/users", (req, res) =>
  userService.getUsers().then(Util.handleData(res))
);

// POST Requests
router.post(
  "/users/create",
  userValidator.createValidators(),
  (req, res) =>
    Util.handleValidation(req, res, () =>
      userService
        .doesUserWithLoginExist(req.body.login)
        .then((doesExist) =>
          doesExist
            ? Util.handleConflict(
                res,
                "User already exists"
              )
            : userService.createUser(req.body).then(Util.handleData(res))
        )
    )
);

export default router;
