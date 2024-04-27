import React, { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import List from "./components/List";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import UserPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage"
import TodoItemPage from "./components/TodoItemPage"
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Switch,
  redirect,
  NavLink,
} from "react-router-dom";
const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todo, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    // fetchUser();
    fetchTodos();
  }, []);

  // async function fetchUser() {
  //   try {
  //     const response = await axios.get<IUser[]>(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     setUsers(response.data);
  //     console.log(response.data[0].name);
  //     console.log(users);
  //   } catch (e) {
  //     alert(e);
  //   }
  // }
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
      // console.log(response.data[0].name);
      // console.log(users);
    } catch (e) {
      alert(e);
    }
  }

  // const users: IUser[] = [
  //   {
  //     id: 1,
  //     name: "Ulbi tv",
  //     email: "asf@mail.ru",
  //     address: { city: "Moscow", street: "Lenina", zipcode: "h3v1c2"},

  //   },
  //   {
  //     id: 1,
  //     name: "Timur",
  //     email: "asf@mail.ru",
  //     address: { city: "Kaliningrad", street: "Pushkina", zipcode: "h3v1c2" },
  //   },
  // ];
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">ToDos</NavLink>
        </div>

        <Route path={"/users"} exact>
          <UserPage></UserPage>
        </Route>
        <Route path={"/todos"} exact>
          <TodosPage></TodosPage>
        </Route>
        <Route path={"/users/:id"}>
          <UserItemPage></UserItemPage>
        </Route>
        <Route path={"/todos/:id"}>
          <TodoItemPage></TodoItemPage>
        </Route>
      </div>
    </BrowserRouter>
  );
  {
    /* <EventsExample></EventsExample> */
  }
  {
    /* <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outlined}
        height="200px"
        width="200px"
      >
        <button>Button</button>
        <div>sDSdffdsafsd</div>
      </Card> */
  }
  {
    /* <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
       <List
        items={todo}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      /> */
  }
  {
    /* <UserList users={users}></UserList> */
  }
};

export default App;
