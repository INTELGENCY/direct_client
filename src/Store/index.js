import AlertReducer from "./Features/AlertSlice.js";
import ProfileSliceReducer from "./Features/ProfileSlice.js";
import QalamSliceReducer from "./Features/QalamSlice.js";
import loadingSlice from "./Features/loadingSlice.js";
import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "directapp",
  version: 1,
  storage,
};

const ProfileSlice = persistReducer(persistConfig, ProfileSliceReducer);
const PersistQalam = persistReducer(persistConfig, QalamSliceReducer);

export const store = configureStore({
  reducer: {
    alert: AlertReducer,
    profile: ProfileSlice,
    qalam: PersistQalam,
    loading: loadingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
