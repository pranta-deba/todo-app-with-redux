import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className="rounded-md w-full flex justify-between p-4 border-b-2 shadow">
      <input type="checkbox" name="check" id="check" />
      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-2">
        <Button className="bg-red-500">Delete</Button>
        <Button className="bg-[#5C53FE]">Edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
