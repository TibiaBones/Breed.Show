import { FC } from "react";

import userApi from "../../api/users-api";

const { useFindAllQuery } = userApi;

const Example: FC<any> = () => {
  const { data = [] } = useFindAllQuery();

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Login</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {data.map(({ id, first_name, last_name, login, email }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{login}</td>
            <td>{email}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Example;
