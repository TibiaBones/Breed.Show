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
router.post("/users/create", userValidator.createValidators(), (req, res) =>
  userService
    .createUser(req.body)
    .then((data) => res.status(200).send(data))
    .catch(({ message }) =>
      res.status(500).send({
        message: `Could not add User: ${message}`,
      })
    )
);

export default router;
