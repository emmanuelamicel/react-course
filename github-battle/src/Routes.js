import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import CounterMemo from './pages/CounterMemo'
import WithLoading from './hoc/WithLoading'
import Cities from './pages/Cities'
// import Popular from './pages/Popular'

const PopularLazy = lazy(() => import('./pages/Popular'))

const Routes = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading with Suspense...</div>}>
        <Route path="/counter" component={WithLoading(CounterMemo)} />
        <Route path="/cities" component={Cities} />
        <Route path="/" exact>
          <PopularLazy />
        </Route>
      </Suspense>
    </Switch>
  )
}

export default Routes
