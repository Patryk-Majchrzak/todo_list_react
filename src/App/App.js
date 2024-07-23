import { HashRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "../features/tasks/tasksSlice";
import { translations } from "../translations";
import TasksView from "../features/tasks/TasksView";
import AuthorView from "../features/author/AuthorView";
import { SingleTaskView } from "../features/tasks/SingleTaskView";
import { toAuthorView, toSingleTaskView, toTasksView } from "./routing";
import Navigation from "./Navigation";

function App() {

  const language = useSelector(selectLanguage);
  const t = translations["Navigation"][language];

  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toSingleTaskView(t.section_1)}>
          <SingleTaskView />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={toTasksView(t.section_1)}>
          <TasksView />
        </Route>
      </Switch>
      <Switch>
        <Route path={toAuthorView(t.section_2)}>
          <AuthorView />
        </Route>
      </Switch>
      <Switch>
        <Route path="/">
          <Redirect to={toTasksView(t.section_1)} />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;