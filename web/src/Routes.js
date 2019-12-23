import { Router, Route } from '@hammerframework/router'

const Routes = () => {
  return (
    <Router>
      <Route notfound page={NotFoundPage} />
      <Route fatalerror page={FatalErrorPage} />
    </Router>
  )
}

export default Routes
