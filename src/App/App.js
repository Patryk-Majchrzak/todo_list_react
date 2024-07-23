import { HashRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import { useTranslation } from "react-i18next";
import TasksView from "../features/tasks/TasksView";
import AuthorView from "../features/author/AuthorView";
import { SingleTaskView } from "../features/tasks/SingleTaskView";
import { toAuthorView, toSingleTaskView, toTasksView } from "./routing";
import Navigation from "./Navigation";

function App() {

  const [t] = useTranslation("translation")

  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toSingleTaskView(t("Navigation.section_1"))}>
          <SingleTaskView />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={toTasksView(t("Navigation.section_1"))}>
          <TasksView />
        </Route>
      </Switch>
      <Switch>
        <Route path={toAuthorView(t("Navigation.section_2"))}>
          <AuthorView />
        </Route>
      </Switch>
      <Switch>
        <Route path="/">
          <Redirect to={toTasksView(t("Navigation.section_1"))} />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App;