import { call, put, takeLatest, select, takeEvery } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./localStorage";
import { getExampleTasks } from "./getExampleTasks";

function* showExampleTasks() {
    try{
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks.data))
    } catch {
        call(alert, "Unexpected error occured")
    }
}

function* handleLocalStorage () { 
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
} 

export function* watchTasksActions() {
    yield takeLatest(fetchExampleTasks.type, showExampleTasks)
    yield takeEvery("*", handleLocalStorage)
}