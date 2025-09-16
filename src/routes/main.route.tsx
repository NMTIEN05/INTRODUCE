import { createBrowserRouter, Link } from "react-router-dom";
import PersonalProfile from "../pages/Profile";
import ProjectDetail from "../pages/compudent/DA1";
import ProjectDetail02 from "../pages/compudent/DA2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonalProfile/>
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "da1",
    element: <ProjectDetail />,
  },
  {
    path: "da2",
    element: <ProjectDetail02 />,
  }
]);
