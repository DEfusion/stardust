import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Root from './Components/Root'
import Layout from './Components/Layout'
import ComponentDoc from './Components/ComponentDoc/ComponentDoc'
import PageNotFound from './Views/PageNotFound'
import Introduction from './Views/Introduction'

// TODO remove these once PRs are merged and docs are updated to use index.js files
import { Input } from 'stardust'
const InputDoc = () => <ComponentDoc _meta={Input._meta} />

const routes = (
  <Route path='/' component={Layout}>
    <IndexRedirect to='introduction' />

    <Route path='introduction' component={Introduction} />
    {/* TODO remove routes once open PRs are merged and docs are updated to use index.js files */}
    <Route path='elements'>
      <Route path='input' component={InputDoc} />
    </Route>

    {/* v1 Routes */}
    <Route path=':type/:name' component={Root} />
    <Route path='*' component={PageNotFound} />
  </Route>
)

export default routes
