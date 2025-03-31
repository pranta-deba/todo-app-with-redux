import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useUpdateTodoMutation } from "@/redux/api/api";

type TTodoUpdateModalProps = {
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
  _id: string;
};

const UpdateTodoModal = ({
  title: oldTitle,
  description: oldDes,
  priority: oldPrio,
  _id,
  isCompleted,
}: TTodoUpdateModalProps) => {
  const [task, setTask] = useState(oldTitle || "");
  const [description, setDescription] = useState(oldDes || "");
  const [priority, setPriority] = useState(oldPrio || "");

  const [updateTodo, { isLoading: updateLoading }] = useUpdateTodoMutation();

  console.log("update todo loader==>", updateLoading);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!priority || !task || !description) {
      return;
    }

    const options = {
      id: _id,
      data: {
        title: task,
        description,
        priority,
        isCompleted,
      },
    };

    updateTodo(options);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="primary-bg text-xl font-semibold cursor-pointer text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
          <DialogDescription>
            Update your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                placeholder="task"
                className="col-span-3"
                defaultValue={oldTitle}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <textarea
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                placeholder="description"
                className="col-span-3"
                defaultValue={oldDes}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Priority
              </Label>
              <div className="flex gap-2 ">
                <Button
                  type="button"
                  onClick={() => setPriority("high")}
                  className={`text-[10px] ${
                    priority === "high"
                      ? "bg-linear-to-tr from-[#DC02C3] to-[#5C53FE] text-white shadow-md"
                      : "bg-white text-black shadow-md hover:bg-white hover:text-black"
                  }`}
                >
                  high
                </Button>
                <Button
                  type="button"
                  onClick={() => setPriority("medium")}
                  className={`text-[10px] ${
                    priority === "medium"
                      ? "bg-linear-to-tr from-[#DC02C3] to-[#5C53FE] text-white shadow-md"
                      : "bg-white text-black shadow-md hover:bg-white hover:text-black"
                  }`}
                >
                  medium
                </Button>
                <Button
                  type="button"
                  onClick={() => setPriority("low")}
                  className={`text-[10px] ${
                    priority === "low"
                      ? "bg-linear-to-tr from-[#DC02C3] to-[#5C53FE] text-white shadow-md"
                      : "bg-white text-black shadow-md hover:bg-white hover:text-black"
                  }`}
                >
                  low
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button
                disabled={!priority || !task || !description}
                type="submit"
                className="primary-bg"
              >
                Save changes
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodoModal;
