import {Route, Switch} from 'react-router-dom'
import {About, Contact, Home, Login, Search, SignUp} from "./pages";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path="/Search" component={Search}/>
      </Switch>

  );
}

export default App;
