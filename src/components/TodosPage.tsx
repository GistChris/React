import React,{FC,useEffect,useState} from 'react';
import { ITodo, IUser } from "../types/types";
import List from "../components/List";
import TodoItem from "../components/TodoItem";
import axios from "axios";
const TodosPage:FC = () => {
    const [todo, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {   
      fetchTodos();
    }, []);
  
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
    return (
        <List
        items={todo}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    );
};

export default TodosPage;