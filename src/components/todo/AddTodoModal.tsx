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
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useAddTodoMutation } from "@/redux/api/api";
// import { useAppDispatch } from "@/redux/hook";
// import { addTodo } from "@/redux/features/todoSlice";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  // ! For Local State Management
  // const dispatch = useAppDispatch();
  // * For Server
  const [addTodo, obj] = useAddTodoMutation();

  const { data, isError, isSuccess, isLoading } = obj;

  console.log({ data, isError, isSuccess, isLoading });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!priority || !task || !description) {
      return;
    }
    // const randomId = Math.random().toString(36).substring(2, 10);
    const taskDetails = {
      // id: randomId,
      title: task,
      description,
      priority,
      isCompleted: false,
    };
    // ! For Local State Management
    // dispatch(addTodo(taskDetails));
    // * For Server
    addTodo(taskDetails);
    setPriority("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="primary-bg text-xl font-semibold cursor-pointer text-white">
          Add todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
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
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                placeholder="description"
                className="col-span-3"
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

export default AddTodoModal;
