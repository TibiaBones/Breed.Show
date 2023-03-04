import { FC } from "react";

import tutorialApi from "../api/tutorials-api";

const { useFindAllQuery } = tutorialApi;

const Example: FC<any> = () => {
  const { data = [] } = useFindAllQuery();

  return (
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Published</th>
        </thead>
        {data.map(({ id, title, description, published }) => (
          <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{published}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Example;
