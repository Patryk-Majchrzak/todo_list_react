import { all } from "redux-saga/effects";
import { watchLanguageChange, watchTasksActions } from "./features/tasks/tasksSaga";

function* rootSaga() {
    yield all([
        watchTasksActions(),
        watchLanguageChange(),
    ])
}

export default rootSaga; 