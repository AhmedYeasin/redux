import { Controller, useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  PRIORITY_LABEL,
  STATUS_LABEL,
  TASK_PRIORITY,
  TASK_STATUS,

} from "@/redux/features/tasks/index.ts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select.tsx";
import { useAppDispatch } from "@/redux/hooks.ts";
import { addTask } from "@/redux/features/tasks/tasks.slice.ts";

export type DialogMode = "create" | "edit";

// interface TaskFormDialogProps {
//   open: boolean;
//   mode: DialogMode;
//   editingId?: string | null;
//   onClose: () => void;
// }

// type TaskFormValues = {
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: TaskPriority;
// };

export function TaskFormDialog({
  open,
  mode,
  editingId,
  onClose,
}) {
  const { register, handleSubmit, control } = useForm()
  const dispatch = useAppDispatch()

  const onSubmit = (values) => {
    console.log(values);
    dispatch(addTask(values))
    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {mode === "edit" ? "Edit task" : "New task"}
          </DialogTitle>
          <DialogDescription>
            {mode === "edit"
              ? "Update the details of this task."
              : "Capture what you need to get done."}
          </DialogDescription>
        </DialogHeader>

        <form
          id="task-form"
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              autoFocus
              {...register("title")}
              placeholder="What needs doing?"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={3}
              {...register("description")}
              placeholder="Optional details…"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Controller
                control={control}
                name="status"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {TASK_STATUS.map((status) => (
                        <SelectItem key={status} value={status}>
                          {STATUS_LABEL[status]}
                        </SelectItem>
                      ))}
                    </SelectContent>

                  </Select>
                  // <select
                  //   value={field.value}
                  //   onChange={(event) => field.onChange(event.target.value as TaskStatus)}
                  //   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  // >
                  //   {TASK_STATUS.map((status) => (
                  //     <option key={status} value={status}>
                  //       {STATUS_LABEL[status]}
                  //     </option>
                  //   ))}
                  // </select>
                )}
              />
            </div>

            <div className="space-y-1.5">
              <Label>Priority</Label>
              <Controller
                control={control}
                name="priority"
                render={({ field }) => (
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {TASK_PRIORITY.map((priority) => (
                        <SelectItem key={priority} value={priority}>
                          {PRIORITY_LABEL[priority]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  // <select
                  //   value={field.value}
                  //   onChange={(event) => field.onChange(event.target.value as TaskPriority)}
                  //   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  // >
                  //   {TASK_PRIORITY.map((priority) => (
                  //     <option key={priority} value={priority}>
                  //       {PRIORITY_LABEL[priority]}
                  //     </option>
                  //   ))}
                  // </select>
                )}
              />
            </div>
          </div>
        </form>

        <DialogFooter>
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button form="task-form" type="submit">
            {mode === "edit" ? "Save changes" : "Create task"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
