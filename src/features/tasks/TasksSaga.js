import { call, put, takeLatest, select, takeEvery, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, fetchExampleTasksError, fetchExampleTasksSuccess } from "./tasksSlice";
import { changeLanguage } from "i18next";
import { saveTasksInLocalStorage } from "./localStorage";
import { getExampleTasks } from "./getExampleTasks";
import { setLanguage, selectTitle, setTitle } from "./languageSlice";

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

function* changeLanguageSaga({payload: language}) {
  yield put(setTitle(language))
  const title = yield select(selectTitle);
  
  document.documentElement.lang = language;
  document.title = title;

  yield call (changeLanguage, language);
}

export function* watchLanguageChange() {
  yield takeLatest(setLanguage.type, changeLanguageSaga);
}

export function* watchTasksActions() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
    yield takeEvery("*", handleLocalStorage)
}