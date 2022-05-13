import { configureStore } from "@reduxjs/toolkit";
import { moviesApi, usersApi } from "./reducers/index";
import userSlice from "./reducers/index";
import todoSlice from "./reducers/todoreducer";

export const store = configureStore({
  reducer: {
    users: userSlice,
    todoData: todoSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware, usersApi.middleware),
});
