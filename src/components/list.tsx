import React from "react";
import DeleteButton from "./deletebutton";

type ListProps = {
  id: number;
  task: string;
  createdAt: Date;
};

export default function List({ id, task, createdAt }: ListProps) {
  return (
    <div className="flex text-red-700 border-2 mt-2 justify-center gap-2">
      <p>{task}</p>
      <DeleteButton id={id} />
    </div>
  );
}
