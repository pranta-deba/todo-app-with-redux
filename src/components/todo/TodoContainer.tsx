
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
       
        <AddTodoModal/>
        <button>filter</button>
      </div>

      <div className="w-full h-full primary-bg p-1 rounded-xl">
        <div className="w-full h-full bg-white rounded-xl space-y-2 p-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
