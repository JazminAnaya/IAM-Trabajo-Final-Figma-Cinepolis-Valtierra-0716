import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { LoginAdmin } from "./components/LoginAdmin";
import { CreateAccount } from "./components/CreateAccount";
import { Catalog } from "./components/Catalog";
import { MovieDetails } from "./components/MovieDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login-admin",
    Component: LoginAdmin,
  },
  {
    path: "/create-account",
    Component: CreateAccount,
  },
  {
    path: "/catalog",
    Component: Catalog,
  },
  {
    path: "/movie/:id",
    Component: MovieDetails,
  },
]);
