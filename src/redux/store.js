import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import contactsSlice from "./contacts/contactsSlice";
import userSlice from "./user/userSlice";

const persistConfig = {
  key: "tokenUser",
  storage,
  whitelist: ["token"],
  stateReconciler: autoMergeLevel1,
};
const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

const reducer = combineReducers({
  phonebook: contactsSlice,
  user: persistedReducer,
});
const logger = createLogger({
  collapsed: logEntry => !logEntry.error,
  timestamp: false,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // thunk: {
      //   extraArgument: getDataContacts(),
      // },
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  // devTools: process.env.NODE_ENV !== "production",
  //   preloadedState,
  //   enhancers: [reduxBatch],
});
export default store;
export const persistor = persistStore(store);
