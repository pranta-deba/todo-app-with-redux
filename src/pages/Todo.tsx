import TodoContainer from "@/components/todo/todoContainer";
import Container from "@/components/ui/container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold my-10">My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
