"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { createTask } from "@/actions/task.actions";

export default function CreateButton() {
  const [task, setTask] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await createTask(task);
      setTask("");
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button>Create</Button>
    </form>
  );
}
