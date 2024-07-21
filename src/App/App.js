import { HashRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import Nav from "./Nav";
import TasksView from "../features/tasks/TasksView";
import Author from "../features/author/AuthorPage";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route path="/zadania">
          <TasksView />
        </Route>
      </Switch>
      <Switch>
        <Route path="/autor">
          <Author />
        </Route>
      </Switch>
      <Switch>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;