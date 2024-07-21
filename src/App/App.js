import { HashRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import Nav from "./Nav";
import TasksView from "../features/tasks/TasksView";
import AuthorView from "../features/author/AuthorView";
import { SingleTaskView } from "../features/tasks/SingleTaskView";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route path="/zadania/:id">
          <SingleTaskView />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/zadania">
          <TasksView />
        </Route>
      </Switch>
      <Switch>
        <Route path="/autor">
          <AuthorView />
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