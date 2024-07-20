import { call, put, takeEvery } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* showExampleTasks() {
    try{
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks.data))
    } catch {
        call(alert, "Unexpected error occured")
    }
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, showExampleTasks)
}