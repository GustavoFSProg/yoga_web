import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Classes from './Pages/Classes/Classes'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/classes" exact component={Classes} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
