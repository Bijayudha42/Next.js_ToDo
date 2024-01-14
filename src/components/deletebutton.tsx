"use client";

import React from "react";
import { Button } from "./ui/button";
import { deleteTask } from "@/actions/task.actions";

export default function DeleteButton({ id }: { id: number }) {
  return (
    <Button variant={"destructive"} onClick={() => deleteTask(id)}>
      Delete
    </Button>
  );
}
