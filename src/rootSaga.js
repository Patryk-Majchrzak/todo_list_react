import { all } from "redux-saga/effects";
import { watchTasksActions } from "./features/tasks/TasksSaga";

function* rootSaga() {
    yield all([
        watchTasksActions(),
    ])
}

export default rootSaga; 