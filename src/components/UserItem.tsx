import React, { FC } from "react";
import { IUser,ITodo } from "../types/types";
interface UserItemProps {
  user: IUser;
  onClick:(user:IUser)=>void
  // todo:ITodo;
}
const UserItem: FC<UserItemProps> = ({ user,onClick }) => {
  return (
    <div onClick={()=>onClick(user)}  style={{ padding: 15, border: "2px solid gray" }}>
      {user.id}.{user.name} live in {user.address.city} on the street
      {user.address.street}
    </div>
  );
};

export default UserItem;
