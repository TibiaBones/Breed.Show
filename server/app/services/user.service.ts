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
      profile_status: user.profile_status,
      city: user.city,
      location: user.location,
      avatar: user.avatar,
    }).then((userNew) => userNew),
};

export default userService;
