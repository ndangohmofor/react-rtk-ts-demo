import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";

//Redux persist setup
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const logger = createLogger();

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
