import { FC } from "react";

import tutorialApi from "../../api/tutorials-api";

const { useFindAllQuery } = tutorialApi;

const Example: FC<any> = () => {
  const { data = [] } = useFindAllQuery();

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Published</th>
        </tr>
        </thead>
        <tbody>
        {data.map(({ id, title, description, published }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{published}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Example;
