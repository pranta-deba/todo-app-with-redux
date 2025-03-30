const TodoCard = () => {
  return (
    <div className="bg-purple-200 rounded-md w-full flex justify-between p-4">
      <input type="checkbox" name="check" id="check" />
      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-2">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
