export type TaskType = "pending" | "in-progress" | "completed";
export type TaskPriority = "low" | "medium" | "high";

export interface ITask {
  title: string;
  description: string;
  priority: string;
  status: string;
}
export type TInitialState = ITask[];
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskType;
  priority: TaskPriority;
  updatedAt: Date | string | number;
}
