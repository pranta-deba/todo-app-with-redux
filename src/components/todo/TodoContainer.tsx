import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import NoTaskCard from "./NoTaskCard";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="w-full h-full primary-bg p-1 rounded-xl">
        <div className="w-full h-full bg-white rounded-xl space-y-2 p-3">
          {todos.length === 0 ? (
            <NoTaskCard />
          ) : (
            todos.map((todo) => <TodoCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
