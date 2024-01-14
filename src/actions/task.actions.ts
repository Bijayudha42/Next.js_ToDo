"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export const getTasks = async () => {
  try {
    const tasks = await prisma.task.findMany();
    return { tasks };
  } catch (error) {
    return { error: "Failed to fetch Data" };
  }
};

export const createTask = async (task: string) => {
  try {
    await prisma.task.create({
      data: {
        task,
      },
    });
    revalidatePath("/");
    return { message: "Task Created Successfully" };
  } catch (error) {
    return { error: "Failed to Create Task" };
  }
};

export const deleteTask = async (id: number) => {
  try {
    await prisma.task.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
    return { message: "Task Deleted Successfully" };
  } catch (error) {
    return { error: "Failed to Delete Task" };
  }
};
