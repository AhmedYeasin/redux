import type { TaskType } from "./tasks.type.ts";

export const TASK_STATUS: TaskType[] = ["pending", "in-progress", "completed"];
export const TASK_PRIORITY: Record<TaskType, string> = {
  low: "Low",
  medium: "Medium",
  high: "High"
} as const;