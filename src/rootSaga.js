import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/tasks/TasksSaga";

function* rootSaga() {
    yield all([
        watchFetchExampleTasks(),
    ])
}

export default rootSaga; 