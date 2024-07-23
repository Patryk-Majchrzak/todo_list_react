import { call, put, takeLatest, select, takeEvery, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, fetchExampleTasksError, fetchExampleTasksSuccess } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./localStorage";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    try {
      yield delay(2000);
      const exampleTasks = yield call(getExampleTasks);
      yield put(fetchExampleTasksSuccess(exampleTasks.data));
    } catch (error) {
      yield put(fetchExampleTasksError());
    }
  }

function* handleLocalStorage() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* watchTasksActions() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
    yield takeEvery("*", handleLocalStorage)
}