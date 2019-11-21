import { BrowserRouter, Switch, Route } from '@hammerframework/web'

import Home from 'src/pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
