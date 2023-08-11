import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CompetencyTracker from './Pages/CompetencyTracker/CompetencyTracker';
import Login from './Pages/Login/Login';

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/tracker',
      element: <CompetencyTracker />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
