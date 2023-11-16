import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <fragment>
    <BrowserRouter className="NavBar">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </fragment>
)

export default App
