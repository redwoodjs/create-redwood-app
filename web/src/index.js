import ReactDOM from 'react-dom'
import { RedwoodProvider } from '@redwoodjs/web'

import Routes from 'src/Routes'

import './index.css'

ReactDOM.render(
  <RedwoodProvider>
    <Routes />
  </RedwoodProvider>,
  document.getElementById('redwood-app')
)
