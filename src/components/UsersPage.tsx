import React, { FC, useEffect, useState } from "react";
import { ITodo, IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";
import axios from "axios";
import { useHistory } from "react-router-dom";
const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      console.log(response.data[0].name);
      console.log(users);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={(user) => history.push("/users/" + user.id)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UserPage;
