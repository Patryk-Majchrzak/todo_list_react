import { call, put, takeLatest, select, takeEvery, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setLoading, setTasks, setError } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./localStorage";
import { getExampleTasks } from "./getExampleTasks";

function* showExampleTasks() {
    try {
        yield put(setLoading(true));
        yield put(setError(false));
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks.data));
        yield put(setLoading(false))
    } catch (error) {
        yield put(setError(true));
    } 
}

function* handleLocalStorage() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchTasksActions() {
    yield takeLatest(fetchExampleTasks.type, showExampleTasks)
    yield takeEvery("*", handleLocalStorage)
}