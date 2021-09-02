import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css"
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";

let tasks = [
  { id: 1, content: "Transfer project to React", done: true, },
  { id: 2, content: "Add functions to project", done: false, },
];

let hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="Task List"/>
      <Section title="Add task" body={<Form />} /> 
      <Section title="List of tasks" body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />} extraButtons={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
      <Footer name="Patryk Krawczyk" year="2021" />
    </Container>
  );
}

export default App;
