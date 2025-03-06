"use client";

import { Col, Row, Input, Button, Select, Tag, Space, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Todo from "../Todo/Todo";
import { addTodo, StatusType, TodoType } from "../store/features/todoSlice";
import { useState } from "react";
import { todosRemainingSelector } from "../store/selector";

export default function TodoList() {
  const todos = useSelector(todosRemainingSelector);

  const dispath = useDispatch();

  const [todo, setTodo] = useState<TodoType>({
    id: crypto.randomUUID(),
    text: "",
    status: "init",
    completed: false,
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: string = e.target.value;
    setTodo((pre) => {
      return {
        ...pre,
        text: input,
      };
    });
  };

  const handleChangeSelect = (e: string) => {
    setTodo((prev) => {
      return {
        ...prev,
        status: e as StatusType, //-ép đúng kiểu
        id: crypto.randomUUID(),
      };
    });
  };

  const handleSubmit = () => {
    dispath(addTodo(todo));
    setTodo({ id: "", text: "", status: "init", completed: false });
  };

  return (
    <div>
      <Row style={{ height: "calc(100% - 40px)" }}>
        {todos.length ? (
          <Col
            span={24}
            style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
          >
            {todos.map((item: TodoType) => (
              <Todo key={item.id} item={item} />
            ))}
          </Col>
        ) : (
          <Typography>No Result!</Typography>
        )}
        <Col span={24} className="pt-4">
          <Space.Compact style={{ display: "flex" }}>
            <Input
              value={todo.text}
              onChange={handleChangeInput}
              onPressEnter={() => {
                if (todo.text.trim() !== "") {
                  handleSubmit();
                }
              }}
            />
            <Select defaultValue="init" onChange={handleChangeSelect}>
              <Select.Option value="init" label="init">
                <Tag color="gray">init</Tag>
              </Select.Option>
              <Select.Option value="doing" label="doing">
                <Tag color="yellow">doing</Tag>
              </Select.Option>
              <Select.Option value="success" label="success">
                <Tag color="blue">success</Tag>
              </Select.Option>
              <Select.Option value="failure" label="failure">
                <Tag color="red">failure</Tag>
              </Select.Option>
            </Select>
            <Button
              type="primary"
              onClick={handleSubmit}
              disabled={todo.text.trim() === ""}
            >
              Add
            </Button>
          </Space.Compact>
        </Col>
      </Row>
    </div>
  );
}
