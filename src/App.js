import {Route, Switch} from 'react-router-dom'
import background from "./img/bg2.jpg";
import { About, Contact, Home, Login, Search, SignUp, Privacy, Terms, Faq, Donate, SocialFollow } from "./pages";

function App() {


  return (

      <div className="bg-center bg-local bg-cover bg-no-repeat bg-auto" style={{ backgroundImage: `url(${background})` }}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/SignUp" component={SignUp}/>
                <Route exact path="/Search" component={Search}/>
                <Route exact path="/Privacy" component={Privacy}/>
                <Route exact path="/Terms" component={Terms}/>
                <Route exact path="/Faq" component={Faq}/>
                <Route exact path="/Donate" component={Donate}/>
                <Route exact path="/SocialFollow" component={SocialFollow}/>
              </Switch>
      </div>
  );
}

export default App;
