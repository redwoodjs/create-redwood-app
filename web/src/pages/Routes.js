import { BrowserRouter, Switch, AnonRoute } from "@hammerframework/hammer-web";

import Home from "./Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AnonRoute path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
