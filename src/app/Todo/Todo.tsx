"use client";

import { Row, Tag, Checkbox, CheckboxProps } from "antd";
import {
  TodoType,
  StatusType,
  removeTodo,
  checkTodo,
} from "../store/features/todoSlice";
import { useDispatch } from "react-redux";

// Định nghĩa kiểu cho props của Todo
interface TodoProps {
  item: TodoType; // item là kiểu TodoType
}

// Sử dụng Record utility type để đảm bảo type safety định nghĩa obj type với record
export const priorityColorMapping: Record<StatusType, string> = {
  init: "gray",
  doing: "yellow",
  success: "blue",
  failure: "red",
};

export default function Todo({ item }: TodoProps) {

  const dispath = useDispatch();

  const toggleCheckbox: CheckboxProps["onChange"] = () => {
    dispath(checkTodo(item.id));
  };

  const handleDelete = (id: string) => {
    dispath(removeTodo(id));
  }

  return (
    <Row
      className="py-1.5"
      justify="space-between"

      style={{
        marginBottom: 3,
        ...(item.completed ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox onChange={toggleCheckbox} checked={item.completed}>{item.text}</Checkbox>
      <div className="flex gap-5">
        <Tag color={priorityColorMapping[item.status]} style={{ margin: 0 }}>
          {item.status}
        </Tag>
        <Tag
          color="red"
          className="cursor-pointer"
          onClick={() => handleDelete(item.id)}
        >
          x
        </Tag>
      </div>
    </Row>
  );
}
