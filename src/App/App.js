import { HashRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import TasksView from "../features/tasks/TasksView";
import AuthorView from "../features/author/AuthorView";
import { SingleTaskView } from "../features/tasks/SingleTaskView";
import { toAuthorView, toSingleTaskView, toTasksView } from "./routing";
import Navigation from "./Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toSingleTaskView()}>
          <SingleTaskView />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={toTasksView()}>
          <TasksView />
        </Route>
      </Switch>
      <Switch>
        <Route path={toAuthorView()}>
          <AuthorView />
        </Route>
      </Switch>
      <Switch>
        <Route path="/">
          <Redirect to={toTasksView()} />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;