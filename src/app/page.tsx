import { getTasks } from "@/actions/task.actions";
import CreateButton from "@/components/create_button";
import List from "@/components/list";
import React from "react";

export default async function Page() {
  const { tasks, error } = await getTasks();

  return (
    <div>
      <CreateButton />
      {tasks?.map((task) => (
        <List
          key={task.id}
          id={task.id}
          task={task.task}
          createdAt={task.createdAt}
        />
      ))}
    </div>
  );
}
