"use client";

import { Col, Row, Input, Typography, Radio, GetProps } from "antd";
import { useDispatch } from "react-redux";
import {
  searchFilter,
  statusFilter,
  StatusType,
} from "../store/features/filterSlice";
import type { RadioChangeEvent } from "antd";
import { useState } from "react";

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

export default function FilterTodo() {
  const [status, setStatus] = useState<StatusType>("All");

  const dispath = useDispatch();

  const onSearch: SearchProps["onSearch"] = (value) => {
    dispath(searchFilter(value));
  };

  const handleChangeRadio = (e: RadioChangeEvent) => {
    setStatus(e.target.value);
    dispath(statusFilter(e.target.value));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder="input search text" onSearch={onSearch} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleChangeRadio}>
          {["All", "init", "doing", "success", "failure"].map(
            (item: string, index: number) => {
              return (
                <Radio key={index} value={item}>
                  {item}
                </Radio>
              );
            }
          )}
        </Radio.Group>
      </Col>
      <Col sm={24}></Col>
    </Row>
  );
}
