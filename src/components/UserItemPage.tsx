import React, { FC, useEffect, useState } from "react";
import { ITodo, IUser } from "../types/types";
import List from "../components/List";
import UserItem from "../components/UserItem";
import axios from "axios";
import { useParams,useHistory } from "react-router-dom";
interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = userParams<UserItemPageParams>();
  const history = userHistory();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);

      console.log(user);
    } catch (e) {
      alert(e);
    }
  }
  return <div>

    <button onClick={()=>history.push('/users')}>Back</button>
    <h1>Users List {user?.name}</h1>
    <div>
        {user?.email}
    </div>
    <div>
        {user?.address.city}  {user?.address.street}  {user?.address.zipcode}
    </div>
  </div>;
};

export default UserItemPage;
