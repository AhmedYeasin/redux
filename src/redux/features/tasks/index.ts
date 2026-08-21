import type { TaskStatus } from "./tasks.type.ts";

export * from "./tasks.constant.ts";
export * from "./tasks.type.ts";


export const STATUS_LABEL = {
  pending: "Pending",
  "in-progress": "In Progress",
  completed: "Completed",
};

export const PRIORITY_LABEL = {
  low: "Low",
  medium: "Medium",
  high: "High",
};
