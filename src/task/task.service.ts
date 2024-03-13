import { Injectable } from '@nestjs/common';


export interface Task {
  id: number;
  description: string;
  completed: boolean;
}

@Injectable()
export class TaskService {
  private tasks = [];

  addTask(description: string) {
      const newTask: Task = {
        id: this.tasks.length + 1,
        description: String(description),
        completed: false,
      };
      this.tasks.push(newTask);
      return newTask;
  }

  deleteTask(id: number) {
    for (const task of this.tasks) {
      if (task.id == id) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        return task;
      }
    }
    throw new Error(`Task ${id} not found or not authorized to delete`);
  }

  markTaskAsCompleted(id: number) {
    for (const task of this.tasks) {
      if (task.id == id) {
        task.completed = true;
        return task;
      }
    }
    throw new Error(`Task ${id} not found or not authorized to complete`);
  }

  getAllTasks() {
    return this.tasks;
  }
}