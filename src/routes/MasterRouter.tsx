// - Import react components
import PublicRoute from './PublicRoute'
import React, { Component } from 'react'
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom'
import Loadable from 'react-loadable'

import { IRouterProps } from './IRouterProps'
import MasterLoadingComponent from 'components/masterLoading/MasterLoadingComponent'

// - Async Components
const AsyncHome: any = Loadable({
  loader: () => import('containers/home'),
  loading: MasterLoadingComponent,
})
const AsyncSignup = Loadable({
  loader: () => import('containers/signup'),
  loading: MasterLoadingComponent,
})
const AsyncEmailVerification = Loadable({
  loader: () => import('containers/emailVerification'),
  loading: MasterLoadingComponent,
})
const AsyncResetPassword = Loadable({
  loader: () => import('containers/resetPassword'),
  loading: MasterLoadingComponent,
})
const AsyncLogin = Loadable({
  loader: () => import('containers/login'),
  loading: MasterLoadingComponent,
})
const AsyncSetting = Loadable({
  loader: () => import('containers/setting'),
  loading: MasterLoadingComponent,
})

/**
 * Master router
 */
export class MasterRouter extends Component<IRouterProps & RouteComponentProps<any>, any> {
  render () {
    const { enabled, data } = this.props
    return (
        enabled ? (
        <Switch>
          <Route path='/signup' component={AsyncSignup} />
          <Route path='/emailVerification' component={AsyncEmailVerification} />
          <Route path='/settings' component={AsyncSetting} />
          <Route path='/resetPassword' component={AsyncResetPassword} />
          <PublicRoute path='/login' component={<AsyncLogin />} />
          <Route render={() => <AsyncHome uid={data.uid} />} />
        </Switch>)
          : ''

    )
  }
}
export default withRouter(MasterRouter)
