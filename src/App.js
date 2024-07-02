import Form from "./Form";
import Tasks from "./Tasks";

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
      <h1>Lista zadań</h1>
      <section className="section">
        <header className="section__header">
          <h2>Dodaj nowe zadanie</h2>
        </header>
        <div className="section__body">
          <Form />
        </div>
      </section>
      <section className="section">
        <header className="section__header section__header--withButtons">
          <h2>Lista zadań</h2>
          <div className="buttonsArea"></div>
        </header>
        <div className="section__body section__body--withList">
          <Tasks tasks={tasks} hideDone={hideDone} />
        </div>
      </section>
    </div>
  );
}

export default App;
