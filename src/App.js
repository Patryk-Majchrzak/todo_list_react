import Form from "./Form";
import Tasks from "./Tasks";
import Header from "./Header";
import Section from "./Section";
import ButtonsArea from "./ButtonsArea";

let tasks = [
  {
    id: 1,
    content: "zrobić coś",
    done: false
  },
  {
    id: 2,
    content: "zrobić coś innego",
    done: true
  }
];

let hideDone = false;

function App() {
  return (
    <div className="container">
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section 
      title="Lista zadań" 
      body={<Tasks tasks={tasks} hideDone={hideDone} />}
      extraHeaderContent={<ButtonsArea tasks={tasks} hideDone={hideDone} />}
      extraHeaderClass="section__header--withButtons"
      extraBodyClass="section__body--withList"
      />
    </div>
  );
}

export default App;
