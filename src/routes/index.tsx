import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Home } from "pages";

export const routes = {
  HOME: "/",
};

const Routes: React.FC = () => {
  const pages = [
    {
      path: routes.HOME,
      component: <Home />,
    },
  ];
  return (
    <BrowserRouter>
      <Switch>
        {pages.map((item) => {
          return (
            <Route path={item.path} key={item.path} element={item.component} />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
