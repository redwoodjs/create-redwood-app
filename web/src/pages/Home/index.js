import { WithCell } from '@hammerframework/hammer-web'

import { query, Loader, default as Component } from './Home'

export default () => {
  return <WithCell {...{ query, Loader, Component }} />
}
