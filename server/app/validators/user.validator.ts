import { check } from "express-validator";

const projectValidator = {
  createValidators: () => [
    check("login", "Field login is required")
      .exists()
      .isLength({ min: 1, max: 100 }),
    check("email", "Field email is required")
      .exists()
      .isLength({ min: 1, max: 100 }),
    check("password", "Field password is required")
      .exists()
      .isLength({ min: 1, max: 100 }),
  ],
};

export default projectValidator;
