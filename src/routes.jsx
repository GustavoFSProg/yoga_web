import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Classes from './Pages/Classes/Classes'
import Register from './Pages/Register/register'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/classes" component={Classes} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
