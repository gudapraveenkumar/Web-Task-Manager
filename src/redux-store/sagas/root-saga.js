import { fork, all } from "redux-saga/effects";

import * as taskSagas from "./task-saga";
import * as authSagas from "./auth-saga";

/**
 * Combine all sagas into rootsaga
 */
export default function* rootSaga() {
  yield all(
    [...Object.values(taskSagas), ...Object.values(authSagas)].map(fork)
  );
}
