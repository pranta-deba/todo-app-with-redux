import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>filter</button>
      </div>

      <div className="bg-purple-600 p-4 rounded-xl space-y-3">
        
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodoContainer;
