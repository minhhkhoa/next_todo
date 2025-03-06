import TodoList from "./TodoList/TodoList";
import FilterTodo from "./filter/FilterTodo";
import { Card, Divider } from "antd";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen items-center bg-amber-100">
        <Card title="Todo App" variant="borderless" className="w-[30%]">
          <FilterTodo />
          <Divider/>
          <TodoList />
        </Card>
      </div>
    </>
  );
}
