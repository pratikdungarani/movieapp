import React from "react";
const Homecontainer = React.lazy(() => import("module/Home/HomeContainer"));

const MovieDetailContainer = React.lazy(() =>
  import("module/MovieDetail/MovieDetailContainer")
);

const SearchContainer = React.lazy(() =>
  import("module/Searchmovies/SearchContainer")
);

const TodoAppContainer = React.lazy(() =>
  import("module/TodoApp/TodoAppContainer")
);

const SignupContainer = React.lazy(() =>
  import("module/Signup/SignupContainer")
);

export const routes = [
  {
    name: "Home",
    path: "/",
    component: Homecontainer,
  },
  {
    name: "Detail",
    path: "/:id",
    component: MovieDetailContainer,
  },
  {
    name: "Search",
    path: "/search",
    component: SearchContainer,
  },
  {
    name: "Todoapp",
    path: "/todo",
    component: TodoAppContainer,
  },
  {
    name: "SignUp",
    path: "/signup",
    component: SignupContainer,
  },
];
