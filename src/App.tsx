import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CompetencyTracker from "./Pages/CompetencyTracker/CompetencyTracker";
import Login from "./Pages/Login/Login";
import DataWrapper from "./Contexts/DataWrapper/DataWrapper";

const App = (): JSX.Element => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/tracker",
      element: <CompetencyTracker />,
    },
  ]);

  return (
    <DataWrapper>
      <RouterProvider router={router} />
    </DataWrapper>
  );
}

export default App;
