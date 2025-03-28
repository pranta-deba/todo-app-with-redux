import TodoContainer from "@/components/todo/todoContainer";
import Container from "@/components/ui/container";

const Todo = () => {
  return (
    <Container>
      <h1>My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
