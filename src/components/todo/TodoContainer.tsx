import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import NoTaskCard from "./NoTaskCard";
import { useGetAllTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const { data: todos, isLoading } = useGetAllTodosQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="w-full h-full primary-bg p-1 rounded-xl">
        <div className="w-full h-full bg-white rounded-xl space-y-2 p-3">
          {todos?.data && todos?.data?.length === 0 ? (
            <NoTaskCard />
          ) : (
            todos?.data?.map((todo) => <TodoCard key={todo.id} {...todo} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
