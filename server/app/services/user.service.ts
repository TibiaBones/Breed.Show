import { User } from "../models/User";

const userService = {
  getUsers: () => User.findAll(),
  createUser: (user) =>
    User.create({
      first_name: user.first_name,
      last_name: user.last_name,
      login: user.login,
      email: user.email,
      password: user.password,
    })
      .then((userNew) => userNew)
      .catch((error) => {
        throw new Error(error);
      }),

  doesUserWithLoginExist: (login) =>
    User.count({ where: { login: login } })
      .then((count) => count !== 0)
      .catch((error) => {
        console.log(error);
      }),
};

export default userService;
