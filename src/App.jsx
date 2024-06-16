import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  // const initialTodoItems = [
  //   { name: "Buy Milk", dueDate: "4/10/2023" },
  //   { name: "Go to College", dueDate: "4/10/2023" },
  //   { name: "Like this video", dueDate: "4/10/2023" },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted: ${todoItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>

      {/* <TodoItem1 />
        <TodoItem2 /> */}
    </center>
  );
}

export default App;
